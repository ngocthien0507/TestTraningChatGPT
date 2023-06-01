import { Configuration, OpenAIApi } from "openai";
import { OPENAI_KEY } from "./env.js";
const openaiApiKey = OPENAI_KEY;
const configuration = new Configuration({
  apiKey: openaiApiKey,
});

export const openai = new OpenAIApi(configuration);
