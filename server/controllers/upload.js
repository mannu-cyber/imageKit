import multer from "multer";
import fs from "fs";
import Imagekit from "../config/imagekit.js";
import Uploads from "../models/Uploads.js";





const postImage = async (req, res) => {
  try {
    const file = fs.readFileSync(req.file.path)
    const fileName = req.file.originalname
    const result = Imagekit.upload({
      file,
      fileName,
      folder: "/imagekit_upload"
    })

    // fs.unlink(req.file.path)

    const image = new Uploads({
      url: result.url,
      fileName: result.fileName
    })

    await image.save()
    res.json({
      success: true,
      message: "Image uploaded successfully",
      data: image
    })

  } catch (err) {
    throw new Error(`Error: ${err.message}`)
  }

}

export default postImage