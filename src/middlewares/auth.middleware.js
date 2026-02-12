import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.model.js";

const verifyJWT = asyncHandler(async (req,res,next) => {
    try {
        const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

        if (!token || token === "undefined") {
        throw new ApiError(401, "Access token missing");
        }


        if(!token){
            throw new ApiError(400,"token are required");
        }

        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        //console.log("decoded ",decoded)

        const user = await User.findById(decoded?._id).select("-password -refreshToken");
        //console.log("user",user);

        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }

        req.user = user ;
        next();
    } catch (error) {
        throw new ApiError(400, error.message || "Something went wrong");
    }
})

export {verifyJWT};