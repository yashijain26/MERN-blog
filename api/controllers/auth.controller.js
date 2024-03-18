import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utlis/error.js";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All feild are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json("sign up successful");
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All feilds are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    // for jwt token 
    const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET);

    //to protect the password
    const{password:pass,...rest} = validUser._doc;
    //giving token to cookie
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest)
  } catch (error) {
    next(error);
  }
};
