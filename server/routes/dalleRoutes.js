import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    let image_url = response.data[0].url;

    res.status(200).json({ image_url });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
