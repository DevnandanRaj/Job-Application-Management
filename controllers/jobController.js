const Job = require("../models/job");

// Add a new job
exports.addJob = async (req, res) => {
  const { title, department, description, openDate } = req.body;

  if (!title || !department || !openDate) {
    return res
      .status(400)
      .json({ error: "Title, department, and open date are required" });
  }

  try {
    const job = await Job.create({ title, department, description, openDate });

    res.status(201).json({ job });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
