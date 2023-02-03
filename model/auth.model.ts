import mongoose from "mongoose";

interface userDetails {
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
}

interface user extends userDetails, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your full name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please enter a valid email address"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
  },
});

const authModel = mongoose.model<user>("GearAuth", userSchema);

export default authModel;
