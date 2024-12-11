import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = 'mongodb+srv://kirtimani:kirtmani7081@file-sharing.n6qs8.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing'
    try{
        await mongoose.connect(MONGODB_URL , {useNewUrlParser:true})
        console.log('data base are connected successfully');
    }catch(error) {
        console.log('error while connecting with the database' , error.message)
    }   
}

export default DBConnection;