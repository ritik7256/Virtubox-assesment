import express from 'express'
import { register,login, checkAuth } from '../controllers/authController.js'
import { authenticate } from '../middleware/authMiddleware.js'

const router=express.Router()

router.post("/register",register)
router.post("/login",login);
router.get("/check", checkAuth);

router.get("/profile",authenticate,(req,res)=>{
    res.json({message:"Authenticated user"})
    console.log("authenticated user")

})
router.post("/logout",(req,res)=>{
    res.clearCookie("token", {
    httpOnly: true,
    secure: false, 
    sameSite: "lax", 
    path: "/" 
  });
    res.json({message:"loggout"})

})
export default router