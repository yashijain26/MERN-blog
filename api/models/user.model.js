import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    profilePicture:{
      type:mongoose.Schema.Types.String,
      default:'https://cdn-icons-png.flaticon.com/512/4646/4646084.png'

    }
  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema)
export default User;

