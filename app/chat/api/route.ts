import * as traceloop from "@traceloop/node-server-sdk";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const question = body.question;
  const answer = await traceloop.withWorkflow(
    { name: "chat" },
    async () => {
      const chatCompletion = await generateText({
        messages: [{ role: "user", content: question }],
        model: openai("gpt-3.5-turbo"),
        experimental_telemetry: { isEnabled: true },
      });

      return chatCompletion.text;
    },
    { question }
  );

  return Response.json({ data: { answer } });
}
