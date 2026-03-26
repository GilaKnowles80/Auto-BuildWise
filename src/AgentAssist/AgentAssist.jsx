// src/AgentAssist/AgentAssist.jsx
import React, { useState } from "react";
import { assistantLogic } from "./assistantLogic";

export default function AgentAssist() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your BuildWise AgentAssist." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const botReply = assistantLogic(input);
    setMessages([...messages, { type: "user", text: input }, { type: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2 z-50">
      <div className="flex-1 overflow-auto max-h-60 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.type === "bot" ? "text-gray-700" : "text-blue-600 text-right"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ask me..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}