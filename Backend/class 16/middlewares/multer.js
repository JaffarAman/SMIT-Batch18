import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("./upload")) {
      fs.mkdir("./upload", (error, res) => {
        if (error) {
          cb(true, false);
        } else {
          cb(false, "./upload");
        }
      });
    } else {
      cb(false, "./upload");
    }
  },
  filename: (req, file, cb) => {
    // console.log("file", new Date().getTime() + "-" + file.originalname);
    // console.log("file");
    const fileName = `${new Date().getTime()}-${file.originalname}`;
    cb(false, fileName);
  },
});

const upload = multer({
  storage,
});

// middleware
export default upload;
