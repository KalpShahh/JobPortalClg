import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userroute.js";  
import companyRoutes from "./routes/companyroutes.js"
import jobRoute from "./routes/jobroute.js"
import applicationRoute from "./routes/applicationroute.js"
import './dbConfig.js';
dotenv.config();  

const app = express();


const corsOptions = {
  origin: "https://localhost:5173",  
  credentials: true,  
};

// Middleware
app.use(cookieParser());  
app.use(cors(corsOptions));  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Routes
app.use("/user", userRoutes);  
app.use("company",companyRoutes);
app.use("job",jobRoute);
app.use("application",applicationRoute)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
