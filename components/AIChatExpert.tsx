
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
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
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm hidden sm:inline">
          Tanya Pakar Penyu
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-[380px] md:w-[420px] h-[calc(100vh-150px)] max-h-[600px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={22} />
              </div>
              <div>
                <p className="font-bold text-sm">Pakar Penyu Banaran</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : msg.role === 'error'
                    ? 'bg-red-50 text-red-600 border border-red-100 rounded-tl-none flex items-center gap-2'
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.role === 'error' && <AlertCircle size={16} className="shrink-0" />}
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sedang Mengetik</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2 items-center bg-slate-100 rounded-2xl px-4 py-1.5 focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 bg-transparent border-none py-3 text-sm focus:outline-none placeholder:text-slate-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:grayscale text-white p-2.5 rounded-xl transition-all shadow-lg shadow-emerald-600/20"
                aria-label="Kirim Pesan"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatExpert;
