import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const openai = new OpenAI();
  const body = await request.json();
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: body.question }],
    model: "gpt-3.5-turbo",
  });

  return Response.json({ answer: chatCompletion.choices[0].message.content });
}
