const express = require('express');
const router = express.Router();

const { summarize, paragraph, chatbot, jsConverter, imageGenerator, speachGenerator } = require('../controllers/openai');

router.route("/summary").post(summarize);
router.route("/paragraph").post(paragraph);
router.route("/chatbot").post(chatbot);
router.route("/js-convert").post(jsConverter);
router.route("/img-generator").post(imageGenerator);
router.route("/text-to-speech").post(speachGenerator);

module.exports = router;