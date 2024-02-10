import {Soln} from '../models/solution.model.js';
import {Doubt} from '../models/doubt.model.js';
import { ApiError } from '../utils/ApiError.js';
import { Community } from '../models/community.model.js';
import userModel from "../models/user.model.js";
import { io } from '../index.js';
// import { uploadOnCloudinary } from '../utils/cloudinary.js';
// uploadOnCloudinary
const addDoubt=async(req,res,next)=>{
    try{
        const {content,user_id}=req.body;
        console.log(req);
        const doubtImage=req.file?.path;
        let img;
        if(doubtImage){
            img=await uploadOnCloudinary(doubtImage);
            if(!img){
                throw new ApiError(400,"Image file is required");
            }
        }
        const current_date=new Date().toISOString();

        const doubt=await Doubt.create({
            content:content,
            doubtImg:img,
            owner:user_id,
            publishingDate:current_date

        })

        const createdDoubt=await Doubt.findById(doubt._id);
        if(!createdDoubt){
            throw new ApiError(500,'Some error occured could not add your doubt');
        }
        res.status(201).json({
            status:201,
            data:createdDoubt
        })
        
    }catch(error){
        next(error);
    }

}

const addSolution=async(req,res,next)=>{
    try{
        const {content,user_id,ques_id}=req.body;
        const current_date=new Date().toISOString();
        console.log(req.file?.path);
        const solnImage=req.file?.path;
        let img;
        if(solnImage){
            img=await uploadOnCloudinary(solnImage);
            if(!img){
                throw new ApiError(400,"Image file is required");
            }
        }
        const soln=await Soln.create({
            question:ques_id,
            owner:user_id,
            content:content,
            solnImg:solnImage,
            publishingDate:current_date
        });
        const ques=await Doubt.findById(ques_id);
        await ques.solutions.push(soln._id);
        ques.status='completed';
        await ques.save({validateBeforeSave:true});
        
        res.status(201).json({
            status:201,
            data:soln
        });
        
    }catch(error){
        next(error);
    }

}

const joinCommunity=async(req,res,next) =>{
    try{
      const {communityId,user_id}=req.body;
      const community=await Community.findById(communityId); 
      const  user = await userModel.findById(user_id);
      user.communities.push(communityId);
      await user.save();
      community.members.push(user_id);
      await community.save();
      res.status(200).json({
        status:200,
        data:'community joined succesfully'
      });  
    }catch(error){
      next(error);
    }
}

const createCommunity=async(req,res,next)=>{
  try{
    const {name,description,user_id,}=req.body;
    const communtity=await Community.create({
      name:name,
      description:description,
      creator:user_id
    })
    res.status(201).json({
      data:communtity
    })

  }catch(error){
    next(error);
  }
}

const getAllCommunties=async(req,res,next)=>{
  try{
    const comms=await Community.find()
                              .populate('owner')
                              .sort('-createdAt');
    res.status(200).json({
      data:comms,
    })
    
  }catch(error) {
    next(error);
  }
}

const chatInCommunity=async(req,res,next)=>{
  try{
    io.on("connection",(socket)=>{
      socket.on('community-chat',()=>{
        
      })
    })
  }catch(error){
    
  }
}


const getQues = async (req, res, next) => {
    const allQues = await Doubt.aggregate([
      {
        $lookup: {
          from: 'Soln',
          localField: '_id',
          foreignField: 'question',
          as: 'solutions',
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'owner',
          foreignField: '_id',
          as: 'owner',
        },
      },
      {
        $unwind: '$solutions',
      },
      {
        $lookup: {
          from: 'Soln',
          localField: 'solutions.upvotes',
          foreignField: '_id',
          as: 'upvotes',
        },
      },
      {
        $unwind: {
          path: '$upvotes',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'Soln',
          localField: 'solutions.solnImg',
          foreignField: '_id',
          as: 'solnImg',
        },
      },
      {
        $unwind: {
          path: '$solnImg',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'Soln',
          localField: 'solutions.downvotes',
          foreignField: '_id',
          as: 'downvotes',
        },
      },
      {
        $unwind: {
          path: '$downvotes',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          'solutions.upvotes': '$upvotes',
          'solutions.downvotes': '$downvotes',
          'solutions.solnImg': '$solnImg',
        },
      },
      {
        $project: {
          content: 1,
          doubtImg:1,
          solutions: {
            _id: 1,
            owner: 1,
            content: 1,
            upvotes: 1,
            downvotes: 1,
            solnImg:1,
            publishingDate: 1,
          },
          owner: {
            _id: 1,
            username: 1,
          },
          upvotes: 1,
          downvotes: 1,
        },
      },
    ]);
  
    res.status(200).json({
      status: 200,
      data: allQues,
    });
  };

export {addDoubt,addSolution,getQues,joinCommunity,getAllCommunties,createCommunity,chatInCommunity};