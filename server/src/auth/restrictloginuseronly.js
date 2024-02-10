
import {getuser} from "./authentication";


async function restrictloginuser (req,res,next){

const userid= req.cookie.uid;

if(!userid){
    return res.redirect("/login");
}

const users= getuser(userid);

if(!users)return res.redirect("/login");

}


export default restrictloginuser;