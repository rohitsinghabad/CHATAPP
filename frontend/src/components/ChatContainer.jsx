import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessageLoadingSkeleton from "./MessageLoadingSkeleton";

function ChatContainer() {
  const { selectedUser, getMessagesByUserId, isMessagesLoading, messages, subscribeToMessages, unsubscribeFromMessages } =
    useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    // clean up
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

 

  return (
    <>
      <ChatHeader />
      <div className="flex-1 px-2 sm:px-4 md:px-6 py-3 sm:py-6 overflow-y-auto">
        {messages.length > 0 ? (
          <div className="w-full sm:max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {messages.map((msg) => (
              <div
                key={SVGAElement._id}
                className={`chat ${
                  msg.senderId === authUser._id ? "chat-end" : "chat-start"
                }`}
              >
               <div
  className={`
    chat-bubble relative break-words
    max-w-[85%] sm:max-w-[75%]
    ${
      msg.senderId === authUser._id
        ? "bg-cyan-600 text-white"
        : "bg-cyan-800 text-slate-200"
    }
  `}
>
                  {(msg.image || msg.imageUrl) && (
                    <img src={msg.image || msg.imageUrl} />
                  )}

                  {msg.text && <p className="mt-2">{msg.text}</p>}
                  <p className="text-[10px] mt-1 opacity-75 text-right whitespace-nowrap">
                    {new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessageLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;
