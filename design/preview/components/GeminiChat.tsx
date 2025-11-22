import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hej! Jag är din personliga glasdesign-assistent. Behöver du hjälp med att välja stil eller mått för ditt anpassade glas?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(userMsg);
      if (response) {
        setMessages(prev => [...prev, { role: 'model', text: response }]);
      } else {
         setMessages(prev => [...prev, { role: 'model', text: "Jag kunde tyvärr inte generera ett svar just nu." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Hoppsan! Jag har problem med att nå designstudion just nu.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-600 text-white p-4 rounded-full shadow-lg shadow-brand-600/30 hover:bg-brand-700 transition-all duration-300 transform hover:scale-105 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2 font-bold hidden sm:inline">Hjälp & Rådgivning</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 bg-white sm:rounded-2xl shadow-2xl border border-stone-200 transition-all duration-300 transform origin-bottom-right flex flex-col max-h-[80vh] ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-brand-600 p-4 sm:rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                    <Bot className="text-white h-5 w-5" />
                </div>
                <div>
                    <h3 className="text-white font-bold">GlasBot</h3>
                    <p className="text-brand-100 text-xs">AI Glasdesignspecialist</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
            </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 min-h-[300px]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white border border-stone-200 text-stone-700 rounded-bl-none shadow-sm'
                }`}>
                    {msg.text}
                </div>
            </div>
          ))}
          {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1">
                      <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                  </div>
              </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-stone-100 sm:rounded-b-2xl">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Fråga om mått, stilar..."
              className="w-full pl-4 pr-12 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm placeholder-stone-400"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition-colors disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-center">
              <span className="text-[10px] text-stone-400">Drivs av Gemini AI • Kontrollera alltid måtten manuellt.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChat;