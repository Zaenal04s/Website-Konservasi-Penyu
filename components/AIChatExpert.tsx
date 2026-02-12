
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, AlertCircle } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot' | 'error';
  content: string;
}

const AIChatExpert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Halo! Saya asisten AI Konservasi Penyu Banaran. Ada yang bisa saya bantu seputar penyu di Pantai Trisik?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'error', content: 'Terjadi gangguan koneksi. Silakan coba lagi nanti.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl"
      >
        <MessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white shadow-2xl rounded-2xl flex flex-col">
          <div className="bg-emerald-600 p-4 rounded-t-2xl flex justify-between text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Asisten Penyu</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-xl text-sm ${msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {msg.role === 'error' && <AlertCircle size={14} className="inline mr-1" />}
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2">
            <input 
              className="flex-1 text-sm outline-none" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}><Send size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatExpert;
