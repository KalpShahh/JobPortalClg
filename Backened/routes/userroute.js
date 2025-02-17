import express from "express";
import isauthenticatedd from "../middlewares/isauthenticated.js";
import {register,login,logout,updateprofile} from "../controller/usercontroller.js"
const route=express.Router();

route.post('/register',register)
route.post('/login',login)
route.post('/logout',logout)
route.post('/profile/updateprofile',isauthenticatedd,updateprofile)

export default route;