// routes.js
import express from 'express';

const router = express.Router();
import user from "../models/user.model.js";

import {setuser,getuser} from "../auth/authentication.js";

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello, this is the main route!');
});

router.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

router.post("/register",async(req,res)=>{
    try{
    const passwords= req.body.password;
    const cpassword= req.body.confirm_password;

    if(passwords===cpassword){
    const registername=new user({
        Username:req.body.username,
        Email:req.body.email,
        Password:req.body.password,
        ConfirmPassword:req.body.confirm_password,
    })

//  const tokengenerated= await registername.genratetoken();
// console.log(tokengenerated);
const usersave=await registername.save();

res.render("login");

}
else{
    res.send("passwords are not matching");
}


    }
    catch(e){
        res.send(`big error${e}`);
    }
})

router.post("/login",async(req,res)=>{

    try{
const name=req.body.login_username;
const password=req.body.login_password;

const database=await user.findOne({name:name});
const ismatch=bcrypt.compare(password,database.password);

   
if(ismatch){
    // res.render("home");
    const token = setuser(database);
    res.cookie("uid",token);
    return res.redirect("/");

}
else{
    res.send("Error Invalid Credentials")
}

    }
    catch(e){
res.send("ERROR Invalid Credentials ");
    }
})


export default router;

