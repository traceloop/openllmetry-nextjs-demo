import * as traceloop from "@traceloop/node-server-sdk";
import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";

traceloop.initialize({
  appName: "app",
  apiKey: process.env.TRACELOOP_API_KEY,
  baseUrl: "https://api.traceloop.com",
  disableBatch: true,
  instrumentModules: {
    openAI: OpenAI,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const openai = new OpenAI();
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: req.body.question }],
    model: "gpt-3.5-turbo",
  });

  return res.json({ answer: chatCompletion.choices[0].message.content });
}
