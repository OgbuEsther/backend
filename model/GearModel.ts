import mongoose from "mongoose";

export interface gearProps {
  name: string;
  price: string;
  status: boolean;
  image: string;
  views: [];
}

interface Igear extends gearProps, mongoose.Document {}

const gearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  status: {
    type: Boolean,
    default : false
  },
  image: {
    type: String,
    required: [true, "please enter an image"],
  },
  views: {
    type: [],
  },
});

const gearModel = mongoose.model<Igear>("BootCampGears", gearSchema);

export default gearModel;
