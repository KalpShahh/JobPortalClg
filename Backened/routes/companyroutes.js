import express from "express";
import isauthenticatedd from "../middlewares/isauthenticated.js";
import {registerCompany,getCompany,getCompanyById,updateCompany} from "../controller/companycontroller.js"
const route=express.Router();

route.post('/registercompany',isauthenticatedd,registerCompany)
route.get('/getcomapny',isauthenticatedd,getCompany)
route.get('/getcompanyid/:id',isauthenticatedd,getCompanyById)
route.post('/company/updatecompany.',isauthenticatedd,updateCompany)

export default route;