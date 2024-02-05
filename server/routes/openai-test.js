// Just run in terminal to make sure it's working.
import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

async function main() {
  const image = await openai.images.generate({
    prompt: "A cute baby sea otter",
  });

  console.log(image.data[0].url);
}
main();
