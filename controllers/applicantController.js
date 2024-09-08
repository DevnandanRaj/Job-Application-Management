const Applicant = require('../models/applicant');

// Add a new applicant
exports.addApplicant = async (req, res) => {
  const { jobId, name, email, resumeLink } = req.body;
  try {
    const applicant = await Applicant.create({ jobId, name, email, resumeLink });
    res.status(201).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all applicants for a specific job
exports.getApplicantsByJob = async (req, res) => {
  const { jobId } = req.query;
  try {
    const applicants = await Applicant.findAll({ where: { jobId } });
    res.status(200).json(applicants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update applicant status
exports.updateApplicantStatus = async (req, res) => {
  const { applicantId } = req.params;
  const { status } = req.body;
  try {
    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }
    applicant.status = status;
    await applicant.save();
    res.status(200).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an applicant
exports.deleteApplicant = async (req, res) => {
  const { applicantId } = req.params;
  try {
    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }
    await applicant.destroy();
    res.status(200).json({ message: 'Applicant deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
