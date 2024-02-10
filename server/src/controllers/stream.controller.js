import { Stream } from "../models/stream.model";
import { ApiError } from "../utils/ApiError";

let stream;
let webCamstreamMap=new Map();
let screenSharestreamMap=new Map();

const broadcast=async(req,res,next)=>{
    try{
        const {webCamsdp,screenSharesdp,title,description,peer_number,sdp,user_id}=req.body;
        console.log(user_id);
        if(peer_number==2){
            const webCampeer = new webrtc.RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    }
                ]
            });
            const screenSharepeer = new webrtc.RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    }
                ]
            });
            webCampeer.addTransceiver("video",{direction: "recvonly"});
            screenSharepeer.addTransceiver("video",{direction: "recvonly"});
            
            const thumbnailPath=req.file?.path;
            let thumbnail;
            if(thumbnailPath){
                thumbnail=await uploadOnCloudinary(thumbnailPath);
                if(!thumbnail){
                    throw new ApiError(400,"Thumbnail file is required");
                }
            }
            const streamInstance=await Stream.create({  
                title:title,
                owner: user_id,
                description:description,
                thumbnail:thumbnail?.url
            });
            const streamId=streamInstance._id;
            const { _id: stringId } = streamId;
            screenSharepeer.ontrack = (e) => {
                console.log(e);
                stream=e.streams[0];
                screenSharestreamMap.set(stringId,e.streams[0]);
            };
            webCampeer.ontrack = (e) => {
                console.log(e);
                webCamstreamMap.set(stringId,e.streams[0]);
            };
            const webCamdesc = new webrtc.RTCSessionDescription(JSON.parse(webCamsdp));
            webCampeer.setRemoteDescription(webCamdesc).catch(e => console.log(e));
            const screenSharedesc = new webrtc.RTCSessionDescription(JSON.parse(screenSharesdp));
            await screenSharepeer.setRemoteDescription(screenSharedesc);
            const webCamanswer = await webCampeer.createAnswer(); 
            await webCampeer.setLocalDescription(webCamanswer);
            const screenShareanswer = await screenSharepeer.createAnswer();
            await screenSharepeer.setLocalDescription(screenShareanswer);
            const payload = {
                webCamsdp: webCampeer.localDescription,
                screenSharesdp:screenSharepeer.localDescription,
                stringId
            }
            res.json(payload);
        }else{
            const peer = new webrtc.RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    }
                ]
            });
            peer.addTransceiver("video",{direction: "recvonly"});
            const thumbnailPath=req.file?.path;

            let thumbnail;
            if(thumbnailPath){
                thumbnail=await uploadOnCloudinary(thumbnailPath);
                if(!thumbnail){
                    throw new ApiError(400,"Thumbnail file is required");
                }
            }
            const streamInstance=await Stream.create({  
                title:title,
                owner: user_id,
                description:description,
                thumbnail:thumbnail?.url
            });
            const streamId=streamInstance._id;
            const { _id: stringId } = streamId;
            peer.ontrack = (e) => {
                console.log(e);
                stream=e.streams[0];
                webCamstreamMap.set(stringId,e.streams[0]);
            };
            const desc = new webrtc.RTCSessionDescription(JSON.parse(sdp));
            peer.setRemoteDescription(desc).catch(e => console.log(e));
            const answer = await peer.createAnswer(); 
            await peer.setLocalDescription(answer);
            const payload = {
                sdp: peer.localDescription,
                stringId
            }
            res.json(payload);
        }    
        
    }catch(error){
        next(error);
    }

}

const watch=async(req,res,next)=>{
    try{
        const {webCamsdp,screenSharesdp,streamId}=req.body;
        const webCampeer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        const screenSharepeer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        io.on('connection',(socket)=>{
            socket.join(streamId);
            
        })
        
        let cam;let screen;
        webCamstreamMap.forEach((value, key) => {
            if(key == streamId ){
                cam=value;
            };
        });
        cam?.getTracks().forEach((track)=>webCampeer.addTrack(track,cam));
        screenSharestreamMap.forEach((value, key) => {
            if(key == streamId ){
                console.log(value);
                screen=value;
            };
        });
        screen?.getTracks().forEach((track)=>screenSharepeer.addTrack(track,screen));
        const webCamdesc = new webrtc.RTCSessionDescription(webCamsdp);
        webCampeer.setRemoteDescription(webCamdesc).catch(e => console.log(e));
        const screenSharedesc = new webrtc.RTCSessionDescription(screenSharesdp);
        await screenSharepeer.setRemoteDescription(screenSharedesc);
        const webCamanswer = await webCampeer.createAnswer(); 
        await webCampeer.setLocalDescription(webCamanswer);
        const screenShareanswer = await screenSharepeer.createAnswer();
        await screenSharepeer.setLocalDescription(screenShareanswer);
        const payload = {
            webCamsdp: webCampeer.localDescription,
            screenSharesdp:screenSharepeer.localDescription,
        }
        res.json(payload);

        
    }catch (error){
        next(error);
    }
}

const streamList=async(req,res,next)=>{
    try{
        const streams=await Stream.aggregate([
            {
                $lookup:{
                    from:"users",
                    localField:"owner",
                    foreignField:"_id",
                    as:"ownerInfo"
                },
            },
            {
                $addFields:{
                    ownerName:{
                        "$arrayElemAt":["$ownerInfo.username",0]
                    }
                },
            },
            {
                $project:{
                    _id:1,
                    ownerName:1,
                    title:1,
                    thumbnail:1     
                }
            }
        ]);
        console.log(streams);
        res.status(200).json(streams);    
    }catch(error){
        next(error);
    }
}
const streamEnded=async(req,res,next)=>{  
    try{
        const {streamId}=req.body;
        console.log(streamId);
        const deletedUser=await Stream.findByIdAndDelete(streamId);
        res.status(200).json({
            message:`Stream with id ${streamId}} has been ended`
        })
    } catch (error) {
        next(error);
    }
}

export {broadcast,watch,streamList,streamEnded};