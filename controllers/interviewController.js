const Interview = require('../models/interview');

// Create  an interview
exports.createInterview = async (req, res) => {
  const { applicantId, interviewDate, interviewerName } = req.body;
  try {
    const interview = await Interview.create({ applicantId, interviewDate, interviewerName });
    res.status(201).json(interview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get interview details for an applicant
exports.getInterviewsByApplicant = async (req, res) => {
  const { applicantId } = req.query;
  try {
    const interviews = await Interview.findAll({ where: { applicantId } });
    res.status(200).json(interviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
