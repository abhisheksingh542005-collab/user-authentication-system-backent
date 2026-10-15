import jwt from "jsonwebtoken";

const generateToken=(id)=>{
    return jwt.sign(
        {userId: id},
        process.env.JWT_SECRET|| "mysecretkey123",
        {
            expiresIn:"7d",
        }
    );

};

export default generateToken;