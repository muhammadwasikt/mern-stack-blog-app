import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from "../cloudinary/cloudinaryConfig.js";



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => { 
    let folder = "uploads";
    if (file.mimetype === "application/pdf") {
      folder = "uploads/pdf";
    } else {
      folder = "uploads/images";
    }
    
    return {
      folder,
      resource_type: "auto",
    };
  },
  allowedFormats: ['jpg', 'png', 'jpeg', 'pdf'],
});

export const upload = multer({ storage })