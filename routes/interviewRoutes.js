const express = require('express');
const { createInterview, getInterviewsByApplicant } = require('../controllers/interviewController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/interviews', authMiddleware, createInterview);
router.get('/interviews', authMiddleware, getInterviewsByApplicant);

module.exports = router;
