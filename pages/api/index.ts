import * as traceloop from "@traceloop/node-server-sdk";
import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const question = req.body.question;
  const answer = await traceloop.withWorkflow(
    { name: "chat" },
    async () => {
      const openai = new OpenAI();
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: question }],
        model: "gpt-3.5-turbo",
      });

      return chatCompletion.choices[0].message.content;
    },
    { question }
  );

  return res.json({ answer });
}
