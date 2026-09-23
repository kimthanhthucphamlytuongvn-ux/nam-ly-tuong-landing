"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatIcon } from "@/components/icons/ChatIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { ChatPanel } from "./ChatPanel";
import { useChat } from "./useChat";

/**
 * Site-wide floating chat widget (mounted once in app/layout.tsx). Split
 * from <ChatPanel> so the open/close affordance and the panel itself can
 * be restyled independently; the actual streaming logic lives in useChat.
 */
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isStreaming, sendMessage } = useChat();

  return (
    <>
      <AnimatePresence>{isOpen && <ChatPanel messages={messages} isStreaming={isStreaming} onSend={sendMessage} onClose={() => setIsOpen(false)} />}</AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Đóng trò chuyện" : "Mở trò chuyện với trợ lý"}
        aria-expanded={isOpen}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+20px)] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-gold to-[#F4D48A] text-[#1B1404] shadow-glow-gold sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <ChatIcon className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
