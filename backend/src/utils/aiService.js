const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const AI_SERVICE_URL = "http://127.0.0.1:8001/parse-resume";

const parseResumeWithAI = async (filePath) => {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath));

  const response = await axios.post(AI_SERVICE_URL, formData, {
    headers: formData.getHeaders(),
  });

  return response.data;
};

module.exports = { parseResumeWithAI };
