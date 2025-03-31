import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {   // async function to handle the signup process
  // this data we get from the body of the request  
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    // check if the user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // check if the password is strong
    const hashPassword = await bcryptjs.hash(password, 10);
    // hash the password using bcryptjs
    // create a new user

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    // save the user to the database
    // createdUser.save() is a method that saves the user to the database
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// this is the login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;  // this data we get from the body of the request

    const user = await User.findOne({ email });   // await for the user to be found in the database
    // find the user in the database using the email
    const isMatch = await bcryptjs.compare(password, user.password); // compare the password with the hashed password using bcryptjs
    // check if the user exists and the password is correct

    // if user is not found, user will be null and isMatch will be false
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({    //200 is the status code for success
        message: "Login successful",
        user: {
          _id: user._id,    // this is the id of the user
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
