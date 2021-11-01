import mongoose from "mongoose";

const connectDb = async () => {
	try {
		const conn = await mongoose.connect("mongodb://127.0.0.1:27017/projectTMP");
		console.log("database connected...");
	} catch (error) {
		console.log(error);
	}
};

export default connectDb;
