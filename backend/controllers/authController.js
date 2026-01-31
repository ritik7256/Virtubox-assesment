import User from "../models/User.js";
import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"

const register=async(req,res)=>{
    const {name,email,password}=req.body;
     
     if (!name || !email || !password){
         return res.status(400).json({ message: "All fields are required" });
     }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)){
        return res.status(400).json({ message:"Invalid email format" });
      }
       if (password.length < 6){
        return res.status(400).json({ message:"Password must be at least 6 characters" });
       }
    const hashed=await bcrypt.hash(password,10);
    await User.create({name,email,password:hashed});
    res.json({message:"User registered"});

}
const login=async(req,res)=>{
    const {email,password}=req.body;

    const user =await User.findOne({email});
    if(!user) return res.status(404).json({message:"USer not Found"});

    const match =await bcrypt.compare(password,user.password);
     
    if(!match) return res.status(401).json({message:"Wrong password"});

    const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.json({messge:"Login Successfull"})
}
const checkAuth = (req, res) => {
  if (!req.cookies.token) {
    return res.status(401).json({ loggedIn: false });
  }
  res.json({ loggedIn: true });
};

export {register,login,checkAuth};
