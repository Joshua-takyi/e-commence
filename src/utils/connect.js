import mongoose from "mongoose";

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("connected to db");
	} catch (error) {
		console.log("failed to connect", error.message);
	}
};

export default connectDb;
