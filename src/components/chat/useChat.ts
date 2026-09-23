"use client";

import { useCallback, useRef, useState } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const GREETING: ChatMessage = {
  id: "greeting",
  role: "assistant",
  content:
    "Chào bạn! Mình là trợ lý của Nấm Lý Tưởng 🍄 Bạn muốn hỏi gì về sản phẩm Khô bò chay cay tê không nè?",
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `m${idCounter}-${Date.now()}`;
}

/**
 * Owns the chat transcript and the streaming fetch to /api/chat. Kept
 * separate from the presentational components (ChatPanel, ChatBubble...)
 * so the UI stays easy to restyle without touching the streaming logic.
 */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      const userMessage: ChatMessage = { id: nextId(), role: "user", content: trimmed };
      const assistantId = nextId();

      // History sent to the API excludes the client-only greeting and the
      // not-yet-filled assistant placeholder we're about to add.
      const historyForApi = [...messages, userMessage]
        .filter((m) => m.id !== "greeting")
        .map((m) => ({ role: m.role, content: m.content }));

      setMessages((prev) => [
        ...prev,
        userMessage,
        { id: assistantId, role: "assistant", content: "" },
      ]);
      setIsStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: historyForApi }),
          signal: controller.signal,
        });

        if (!res.body) throw new Error("Không nhận được phản hồi từ máy chủ.");

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || `Lỗi máy chủ (${res.status}).`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunkText = decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + chunkText } : m
            )
          );
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content:
                    m.content ||
                    "Xin lỗi, trợ lý đang gặp sự cố kết nối. Bạn vui lòng thử lại hoặc nhắn Zalo 0989.333.415 để được hỗ trợ trực tiếp nhé.",
                }
              : m
          )
        );
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, isStreaming]
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  return { messages, isStreaming, sendMessage, stop };
}
