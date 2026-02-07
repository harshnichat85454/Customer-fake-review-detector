import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${db_name}`);
        console.log(`database connected || database host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("DB connection failed",error);
        process.exit(1);
    }
}

export default connectDB;