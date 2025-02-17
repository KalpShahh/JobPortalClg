import express from "express";
import isauthenticatedd from "../middlewares/isauthenticated.js";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} from "../controller/jobcontroller.js";

const route = express.Router();

route.post("/postjob", isauthenticatedd, postJob);
route.get("/getjob", isauthenticatedd, getAllJobs);

route.get("/getadminjob.", isauthenticatedd, getAdminJobs);
route.get("/getadminjob/:id", isauthenticatedd, getJobById);

export default route;
