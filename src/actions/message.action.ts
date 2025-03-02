"use server";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GenerativeModel
import {
  addMessage,
  getChatHistory,
} from "@/lib/chat-data"; // Adjust path // Your fine-tuned model ID

const sendMessageAction = async (
  message: string
): Promise<string> => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error(
        "Missing GEMINI_API_KEY environment variable"
      );
    }

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY || ""
    );

    // Get the fine-tuned model using genAI.getGenerativeModel()
    const model = genAI.getGenerativeModel({
      model: process.env.MODEL_ID || "",
    });

    addMessage(message, "user");

    const chatHistory = getChatHistory().map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    addMessage(responseText, "bot");

    return responseText;
  } catch (error: any) {
    console.error("Error in sendMessageAction:", error);
    return (
      "Sorry, I encountered an error: " + error.message
    ); // Or a generic error message
  }
};

export default sendMessageAction;
