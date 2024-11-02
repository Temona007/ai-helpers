// const dotenv = require('dotenv');
require("dotenv").config({ path: "../.env"});

const path = require('path');
const fs    = require('fs');

const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], 
});

exports.summarize = async (req, res) => {
  const { text } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Updated to GPT-4o
      messages: [
        { "role": "system", "content": "You are a helpful assistant that summarizes text." },
        { "role": "user", "content": `Text: \n${text}` }
      ],
      max_tokens: 500,
      temperature: 0.6,
    });
    if (completion.choices[0].message.content) {
      return res.status(200).json(completion.choices[0].message.content);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

  exports.paragraph = async (req, res) => {
    const { text } = req.body;
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // Updated to GPT-4o
        messages: [
          { "role": "system", "content": "You are a helpful assistant Write a detailed paragraph." },
          { "role": "user", "content": `about: \n${text}` }
        ],
        max_tokens: 500,
        temperature: 0.6,
      });
      if (completion.choices[0].message.content) {
        return res.status(200).json(completion.choices[0].message.content);
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  exports.chatbot = async (req, res) => {
    const { text } = req.body;
    try {
      const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Answer questions similar to how Yoda from Star Wars would.txt
        Me: "Whar is your name?"
        Yoda: "Yoda My name is."
        Me: "How old are you?"
        Yoda: "Old I am. 9000 years old I am."
        Me: "What is your favaorite color?"
        Yoda: "Blue my favourite color is"
        ;
        ${text}?`,
        max_tokens: 300,
        temperature: 0.7,
      });
    
      if (completion.choices[0].text) {
        return res.status(200).json(completion.choices[0].text);
      }
   
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  
  exports.jsConverter = async (req, res) => {
    const { text } = req.body;
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // Updated to GPT-4o
        messages: [
          { "role": "system", "content": "You are a helpful assistant to converting text into JavaScript code." },
          { "role": "user", "content": `Convert this instructions into JavaScript code: \n${text}` }
        ],
        max_tokens: 500,
        temperature: 0.25,
      });
      if (completion.choices[0].message.content) {
        return res.status(200).json(completion.choices[0].message.content);
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  
  
  exports.imageGenerator = async (req, res) => {
    const { text } = req.body;
  
    try {
      const completion = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Generate a Italian design image of \n${text}?`,
        // prompt:"A cute baby sea otter",
        n: 1,
        // size: "256x256",
        // size: "512x512",
        size: "1024x1024",
        
      });
      console.log(completion.data);
    
      if (completion.data[0].url) {
        return res.status(200).json(completion.data[0].url);
      }
   
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };


  exports.speachGenerator = async (req, res) => {
    try {
      const mp3 = await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'nova',
        input: req.body.text,
      });

      // avalible from frontend
      const speechFile = path.resolve('./public/speech.mp3');
      const buffer     = Buffer.from(await mp3.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);

      console.log('Audio saved successfully!');

      res.status(200).json({
          speech_file: 'speech.mp3'
      });
    } catch (error) {
      console.error('Error generating speech:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
