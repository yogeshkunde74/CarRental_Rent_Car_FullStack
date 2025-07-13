// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try{
//         mongoose.connection.on('connected', ()=> console.log("Database Connected"));
//         await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export default connectDB;

// 2ND CODE 

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database Connected");
    });

    await mongoose.connect(process.env.MONGODB_URI); // No options needed in Mongoose 7+

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
