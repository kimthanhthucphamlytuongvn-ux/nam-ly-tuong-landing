"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MushroomIcon } from "@/components/icons/MushroomIcon";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { ChatInputBar } from "./ChatInputBar";
import type { ChatMessage } from "./useChat";

const QUICK_REPLIES = [
  "Khô bò chay cay tê giá bao nhiêu?",
  "Sản phẩm này làm từ gì?",
  "Cho mình xin Zalo tư vấn",
];

interface ChatPanelProps {
  messages: ChatMessage[];
  isStreaming: boolean;
  onSend: (text: string) => void;
  onClose: () => void;
}

export function ChatPanel({ messages, isStreaming, onSend, onClose }: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessage = messages[messages.length - 1];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      role="dialog"
      aria-label="Trò chuyện với trợ lý Nấm Lý Tưởng"
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+96px)] right-4 z-50 flex h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden sm:right-6"
    >
      <GlassCard className="flex h-full flex-col overflow-hidden !bg-bg-1">
        <header className="flex items-center gap-3 border-b border-glass-border px-4 py-3.5">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-grad-accent shadow-glow-gold">
            <MushroomIcon className="h-5 w-5 text-[#1B1404]" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-[0.98rem] text-ink">Trợ lý Nấm Lý Tưởng</p>
            <p className="flex items-center gap-1.5 text-[0.72rem] text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-gold" />
              Luôn sẵn sàng hỗ trợ
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ trò chuyện"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-glass-strong hover:text-ink"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m) => (
            <ChatMessageBubble
              key={m.id}
              message={m}
              isStreamingThisMessage={isStreaming && m.id === lastMessage?.id}
            />
          ))}

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => onSend(q)}
                  className="glass rounded-full border border-glass-border px-3 py-1.5 text-left text-[0.78rem] text-ink-soft transition-colors hover:border-neon-gold hover:text-ink"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <ChatInputBar disabled={isStreaming} onSend={onSend} />
      </GlassCard>
    </motion.div>
  );
}
