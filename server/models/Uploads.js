import mongoose from "mongoose";

const ImageKitSchema = mongoose.Schema({

  url: {
    required: true,
    type: String,
  },
  fileName: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }


});

const ImageKit = mongoose.model("ImageKit", ImageKitSchema);

export default ImageKit