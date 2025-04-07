import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}

const Chatbot: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { type: 'bot', message: 'Hello! How can I help you today?' }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, { type: 'user', message: chatMessage }]);
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev,
          {
            type: 'bot',
            message: "Thank you for your message. Our team will assist you shortly."
          }
        ]);
      }, 1000);
      setChatMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showChatbot && (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowChatbot(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
            title="Chat with us!"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-lg shadow">
            Chat with us
          </span>
        </div>
      )}

      {showChatbot && (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
