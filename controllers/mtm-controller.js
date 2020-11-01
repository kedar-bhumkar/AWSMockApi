const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Mtm = require("../models/mtm");

const getTest = (req, res, next) => {
  res.status(200).json({ Success: "getTest" });
};

const getActiveMTMcases = (req, res, next) => {
  console.log("Inside getActiveMTMcases");
  //returnResponse(req, res)
  payload = req.body
  let activeCases = payload.map((p,index) => {
    let res = {...Mtm.mtmEligibilityResponse}
    console.log(index)
    Math.floor(Math.random() * 10) > 5 ? res.caseID=uuid() : res.caseID=""
    return res;
  });
  console.log("resData = " + activeCases);
  res.status(201).json({ activeCases });
};

const postStatusUpdate = (req, res, next) => {
  console.log("Inside postStatusUpdate");
  returnResponse(req, res);
};

function returnResponse(req, res) {
  payload = req.body;
  let resData = payload.map((p) => ({
    caseId: p.caseId,
    status: Math.floor(Math.random() * 10) > 5 ? "success" : "error",
  }));
  console.log("resData = " + resData);
  res.status(201).json({ resData });
}

exports.getTest = getTest;
exports.getActiveMTMcases = getActiveMTMcases;
exports.postStatusUpdate = postStatusUpdate;
