import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGODB_URI;
        if(!MONGO_URI){
            console.log("MONGODB_URI is not defined in the .env file.");
            process.exit(1);
        }
        const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection FAILED: ", error);
        process.exit(1);
    }
}

export default connectDB;