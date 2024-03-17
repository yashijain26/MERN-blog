import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
    app.listen(3000, () => {
      console.log("server is running on port 3000 !");
    });
  })
  .catch((err) => {
    console.log(err, "error is coming");
  });

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

//adding middleware for error handling
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message =err.message || 'Internal server error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})
