import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, //add cloudinary URL here
      required: [true, "Please upload a video file."],
    },
    thumbnail: {
      type: String, //add cloudinary URL here
      required: [true, "Please upload a thumbnail."],
    },
    title: {
      type: String,
      required: [true, "Enter a title!"],
      trim: true,
      minLength: 10,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: [true, "Write a short description."],
      minLength: [50, "Description must be at least 50 characters long."],
    },
    duration: {
      type: Number, //duration data from cloudinary
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Video = mongoose.models("Video", videoSchema);
