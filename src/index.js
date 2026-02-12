import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from "./App.js";

dotenv.config();

connectDB()
.then( () => {
    const port = process.env.PORT || 8000 ;
    app.listen(port , () => {
        console.log(`Server started at port ${port}`);
    })
})
.catch( (error) => {
    console.log("Mongo DB connection error",error) ;
    
});

