"use client";

import { useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { SendIcon } from "@/components/icons/SendIcon";

interface ChatInputBarProps {
  disabled: boolean;
  onSend: (text: string) => void;
}

export function ChatInputBar({ disabled, onSend }: ChatInputBarProps) {
  const [value, setValue] = useState("");

  function submit() {
    if (disabled || !value.trim()) return;
    onSend(value);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="flex items-end gap-2 border-t border-glass-border p-3">
      <textarea
        id="chat-widget-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhập câu hỏi của bạn..."
        rows={1}
        className="max-h-24 flex-1 resize-none rounded-xl border border-glass-border bg-glass px-3 py-2.5 text-sm text-ink placeholder:text-ink-dim focus:border-neon-gold focus:outline-none"
      />
      <motion.button
        type="button"
        onClick={submit}
        disabled={disabled || !value.trim()}
        aria-label="Gửi tin nhắn"
        whileHover={disabled ? undefined : { y: -2 }}
        whileTap={disabled ? undefined : { scale: 0.94 }}
        className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-neon-gold to-[#F4D48A] text-[#1B1404] shadow-glow-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
      >
        <SendIcon className="h-4 w-4" />
      </motion.button>
    </div>
  );
}
