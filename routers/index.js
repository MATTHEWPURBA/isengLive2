const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

// GET	/
router.get("/", Controller.homePage);
//showAuthors nya gausah pake invoke

// GET	/shoes/add
router.get("/shoes/add", Controller.addPost);

// POST /shoes/add
router.post("/shoes/add", Controller.savePost);

// GET	/shoes/status/:id/available
router.get("/shoes/status/:id/available", Controller.showDetailedPost);

// GET	/shoes/status/:id/discontinue
router.get("/shoes/status/:id/discontinue", Controller.editPost);

// GET	/shoes/delete/:id
router.get("/shoes/delete/:id", Controller.updatePost);

module.exports = router;
