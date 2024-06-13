import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDB database connection established successfully");
        })
        connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    } catch (error) {
        console.log('DB connection error: ',error);   
    }
}