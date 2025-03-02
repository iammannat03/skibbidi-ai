// lib/chat-data.ts
let chatHistory: {
  text: string;
  sender: "user" | "bot";
}[] = [];

export function addMessage(
  text: string,
  sender: "user" | "bot"
) {
  chatHistory.push({ text, sender });
}

export function getChatHistory() {
  return [...chatHistory]; // Return a copy to avoid direct mutation
}

export function clearChatHistory() {
  chatHistory = [];
}
