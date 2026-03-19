import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User, AlertCircle, Loader2 } from 'lucide-react';
import { aiService, AIError } from '../services/aiService';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  isError?: boolean;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: string;
}

export default function AIChatModal({ isOpen, onClose, context = 'General Business Assistant' }: AIChatModalProps) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: language === 'en' 
        ? `Hello! I'm your Fluide AI Assistant. How can I help you with ${context} today?` 
        : language === 'fr' 
        ? `Bonjour ! Je suis votre assistant IA Fluide. Comment puis-je vous aider avec ${context} aujourd'hui ?` 
        : `Olá! Sou o seu Assistente IA Fluide. Como posso ajudá-lo com ${context} hoje?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `Context: ${context}\nUser: ${userMsg.content}\nAI:`;
      const response = await aiService.generateContent(prompt);
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: response
      }]);
    } catch (error: any) {
      const errorMessage = error instanceof AIError ? error.message : 'An unexpected error occurred.';
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: errorMessage,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl h-[600px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-brand-navy/5 flex items-center justify-between bg-brand-navy/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-navy text-brand-cyan rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">Fluide AI</h3>
                  <p className="text-xs text-brand-navy/60">{context}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-brand-navy/40 hover:text-brand-navy hover:bg-brand-navy/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-brand-cyan text-brand-navy ml-3' : 'bg-brand-navy text-white mr-3'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-brand-navy text-white rounded-tr-none' 
                        : msg.isError
                          ? 'bg-red-50 text-red-600 border border-red-100 rounded-tl-none'
                          : 'bg-brand-navy/5 text-brand-navy rounded-tl-none'
                    }`}>
                      {msg.isError && (
                        <div className="flex items-center space-x-2 mb-2 text-red-600 font-bold text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>Error</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] flex-row">
                    <div className="w-8 h-8 rounded-full bg-brand-navy text-white mr-3 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-navy/5 text-brand-navy rounded-tl-none flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-brand-navy/40" />
                      <span className="text-sm text-brand-navy/60">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-brand-navy/5 bg-white">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === 'en' ? 'Ask Fluide AI...' : language === 'fr' ? 'Demander à Fluide IA...' : 'Perguntar à Fluide IA...'}
                  className="w-full pl-6 pr-14 py-4 bg-brand-navy/5 border border-transparent rounded-full focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all outline-none text-brand-navy text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2.5 bg-brand-navy text-white rounded-full hover:bg-brand-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
