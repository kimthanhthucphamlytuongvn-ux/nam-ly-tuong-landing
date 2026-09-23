import OpenAI from "openai";
import { buildSystemPrompt, type ChatMessage } from "@/lib/chatbot";

// This route calls a live third-party API and must never be statically
// cached or pre-rendered.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_MESSAGES = 20; // caps how much history/tokens one request can send
const MAX_MESSAGE_LENGTH = 2000;

function isValidHistory(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= MAX_MESSAGES &&
    value.every(
      (m) =>
        m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= MAX_MESSAGE_LENGTH
    )
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return new Response(
      "Chatbot chưa được cấu hình (thiếu DEEPSEEK_API_KEY trên máy chủ). Vui lòng liên hệ quản trị viên.",
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response("Yêu cầu không hợp lệ.", { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidHistory(messages)) {
    return new Response("Nội dung tin nhắn không hợp lệ.", { status: 400 });
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com",
  });

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const completion = await client.chat.completions.create({
          model: "deepseek-flash",
          stream: true,
          messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
        });

        for await (const chunk of completion) {
          const delta = chunk.choices[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
      } catch (error) {
        console.error("[/api/chat] DeepSeek request failed:", error);
        controller.enqueue(
          encoder.encode(
            "\n\nXin lỗi, trợ lý đang gặp sự cố kết nối. Bạn vui lòng thử lại hoặc nhắn Zalo 0989.333.415 để được hỗ trợ trực tiếp nhé."
          )
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
