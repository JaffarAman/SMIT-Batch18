import mongoose from "mongoose"

export const connectDB = () => {
    try {
        const URI = process.env.MONGODB_URI
        mongoose.connect(URI)
            .then(() => console.log(`mongoDB COnnected!`))
            .catch(err => console.log(`MongoDb error: ${err.message}`))

    } catch (error) {
        console.log("connectDB ERROR:", error.message)
    }
}