import express from "express";
import isauthenticatedd from "../middlewares/isauthenticated.js";
import {applyJob,getAppliedJobs,getApplicants,updateStatus} from "../controller/applicationcontrollr.js"



const route = express.Router();

route.get("/apply/:id", isauthenticatedd, applyJob);
route.get("/getappliedjob", isauthenticatedd, getAppliedJobs);

route.get("/:id/applicants", isauthenticatedd, getApplicants);
route.post("/status/:id/update", isauthenticatedd, updateStatus);

export default route;
