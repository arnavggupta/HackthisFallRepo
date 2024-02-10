
import { Router } from 'express';
import user from "../models/user.model.js";
import {setuser,getuser} from "../auth/authentication.js";
import bcrypt from 'bcrypt';
import { addDoubt, addSolution, createCommunity, getAllCommunties, getQues, joinCommunity } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';



const router = Router();

// Define your routes here
router.post('/adddoubt',addDoubt);
router.post('/addSoln',upload.single('SolnImg'),addSolution);
router.get('/getCommunties',getAllCommunties);
router.post('/joincommunity',joinCommunity);
router.post('/createCommunity',createCommunity);
router.get('/getQues',getQues);

router.post("/register",async(req,res)=>{
    try{ 
        console.log(req.body);
        const passwords= req.body.password;
        const cpassword= req.body.confirm_password;

    if(passwords===cpassword){
    const registername=await user.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        dob:req.body.dob
    })
    const usersave=await registername.save();
    res.status(201).json({
        data:"succesfully registered"
    });

}
else{
    res.send("passwords are not matching");
}


    }
    catch(e){
        res.send(`big error${e}`);
    }
})

router.post("/login",async(req,res,next)=>{
    try{
        console.log(req.body);
        const name=req.body.login_username;
        const password=req.body.login_password;

        const database=await user.findOne({username:name});
        const ismatch=bcrypt.compare(password,database.password);

   
    if(ismatch){
    // res.render("home");
    const token = setuser(database);
    res.cookie("uid",token);
    return res.status(200).json({
        message:"you have logged in successfully",
        data:database,
        token : token
    });

    }
    else{
        res.json({data:"Error Invalid Credentials"});
    }

    }
    catch(e){
        next(e);
    }
})


export default router;

