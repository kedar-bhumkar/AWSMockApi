const express = require('express');
const { check } = require('express-validator');

const mtmController = require('../controllers/mtm-controller');

const router = express.Router();

router.get('/getTest', mtmController.getTest);

router.post(
  '/ActiveCases',
  mtmController.getActiveMTMcases
);

router.post(
  '/CaseActivity',
  mtmController.postStatusUpdate
);


module.exports = router;
