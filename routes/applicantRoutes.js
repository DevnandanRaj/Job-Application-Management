const express = require('express');
const { addApplicant, getApplicantsByJob, updateApplicantStatus, deleteApplicant } = require('../controllers/applicantController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/applicants', authMiddleware, addApplicant);
router.get('/applicants', authMiddleware, getApplicantsByJob);
router.patch('/applicants/:applicantId', authMiddleware, updateApplicantStatus);
router.delete('/applicants/:applicantId', authMiddleware, deleteApplicant);

module.exports = router;
