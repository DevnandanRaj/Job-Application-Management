const express = require("express");
const { addJob, getJobs } = require("../controllers/jobController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/jobs", authMiddleware, addJob);
router.get("/jobs", authMiddleware, getJobs);

module.exports = router;
