import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prompt) {
  //get random number between 0 and the length of the surpriseMePrompts array
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  //ensure we don't get the same 'random' prompt twice.
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
