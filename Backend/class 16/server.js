import express from "express";
import dotenv from "dotenv";
import upload from "./middlewares/multer.js";
import { cloudinaryConfig, cloudinaryUploader } from "./config/cloudinary.js";
dotenv.config({});
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

cloudinaryConfig();

app.use(cors());

app.post("/upload", upload.single("profilePic"), async (request, response) => {
  try {
    // cloudinary
    console.log(request.file);
    const file = await cloudinaryUploader.upload(request.file.path);

    // save file path into database

    // remove image
    fs.unlink(request.file.path, (error, res) => {
      if (error) {
        return response.status(400).json({
          message: error.message,
        });
      }

      response.status(201).json({
        message: "FILE UPLOADED",
        data: file,
      });
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP!",
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`),
);
