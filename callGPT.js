/* createCompletion.js */
import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-personal-2023-05-23-02-01-48",
      prompt: "What types of financial products are available on Infina?",
      max_tokens: 100,
    });
    if (response.data) {
      console.log("choices: ", response.data.choices);
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

createCompletion();
