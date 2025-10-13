import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path: "./env"
})

const app = express();

( async () => {
    try {
        connectDB();
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error;
        });

        const port = process.env.PORT;
        if(!port){
            console.log("PORT is not defined in .env file");
            process.exit(1);
        }
        
        app.listen(Number(port), () => {
            console.log(`Server is listening to ${port || 8000}`);
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw error
    }
})()