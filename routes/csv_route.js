const express = require("express");
const router = express.Router();
const multer = require("multer");

const { home, csvAll } = require("../controllers/home_controller");
const { upload, view, deleteFile } = require("../controllers/csv_controller");
const uploads = multer({ dest: "uploads/" });

//read
router.get("/", home);
router.get("/csv/all", csvAll);
router.get("/csv/:id", view);

//post
router.post("/upload", uploads.single("csv"), upload);

//delete
router.get("/csv/delete/:id", deleteFile);

module.exports = router;
