const jwt=require('jsonwebtoken');
const User = require('../models/user');


const userAuthVerification=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            success: "false",
            message: "Invalide Token, please login"
        });

    }
    if(token){
        try{
            const decodedToken=jwt.verify(token,'DEFAULT_SECRET_KEY');
            const userInfo=await User.findById(decodedToken.getId);
            if(userInfo){
                return res.status(200).json({
                    success:'true',
                    userInfo
                })
            }
            next();
        }catch(error){
             return res.status(401).json({
            success: "false",
            message: "Unauthorized access, please login"
        });
        }
    }

}

module.exports ={ userAuthVerification};