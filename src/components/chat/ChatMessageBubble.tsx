import { cn } from "@/lib/cn";
import { TypingDots } from "./TypingDots";
import type { ChatMessage } from "./useChat";

interface ChatMessageBubbleProps {
  message: ChatMessage;
  /** True only for the assistant message currently receiving stream chunks. */
  isStreamingThisMessage?: boolean;
}

export function ChatMessageBubble({ message, isStreamingThisMessage }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";
  const showTyping = !isUser && isStreamingThisMessage && message.content.length === 0;

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.9rem] leading-relaxed",
          isUser
            ? "rounded-br-sm bg-gradient-to-br from-neon-gold to-[#F4D48A] text-[#1B1404]"
            : "glass rounded-bl-sm text-ink"
        )}
      >
        {showTyping ? (
          <TypingDots />
        ) : (
          <span className="whitespace-pre-wrap">
            {message.content}
            {isStreamingThisMessage && (
              <span
                className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-current align-middle"
                aria-hidden="true"
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
