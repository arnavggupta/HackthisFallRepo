import jwt from "jsonwebtoken";

const secret_key= "$htfopboss";

function setuser(user){

    return jwt.sign({
        _id:user._id,
        email:user.email
    },secret_key);
}


function getuser(token){
return jwt.verify(token,secret_key);
}

export {setuser,getuser};


    