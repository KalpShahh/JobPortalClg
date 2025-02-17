import jwt from "jsonwebtoken";

const isauthenticatedd= async (req,res)=>{
    try {
        
        const tokenn=req.cookies.token;
        if(!tokenn){
            return res.status(401).json({msg:"User not authenticated",success:false});
        }
        const decode=await jwt.verify(tokenn,process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({msg:"invalid token",success:false});
        }
        req.id=decode.userId;
        next();
    } catch (error) {
        
    }
}
export default isauthenticatedd;