import React from "react";

type Props = {
  setMessages: (messages: Message[]) => void;
};

const Sidebar = ({ setMessages }: Props) => {
  return (
    <div className="w-[280px] bg-white p-4 py-10 flex flex-col max-lg:hidden border-r-2 border-black">
      <div className="flex items-center w-full justify-center mb-6">
        <h1 className="text-4xl text-black font-bold brutal-font">
          SKIBBIDI.AI
        </h1>
      </div>

      {/* New Chat Button */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMessages([])}
          className="flex items-center justify-center gap-2 bg-[#4E44FF] button-clear text-white px-4 py-2 rounded-sm border-2 border-black flex-grow"
        >
          <span className="">Clear Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
