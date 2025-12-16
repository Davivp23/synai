import React, { useState } from 'react';
import { Send, Bot, X } from 'lucide-react'; // Asegúrate de tener lucide-react o usa tus propios iconos

const GlassChatMock = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, ¿en qué puedo ayudarte hoy?", sender: 'bot' },
  ]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
    
    // Simulación de respuesta automática
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "¡Por supuesto! ¿Android o IOS?", sender: 'bot' }]);
    }, 1000);
  };

  return (
    // CONTENEDOR PRINCIPAL
    // Hereda el estilo: border-white/30, backdrop-blur, etc.
    <div className="w-80 h-[450px] flex flex-col bg-black/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-2xl font-sans">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-full">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">Asistente AI</h3>
            <span className="flex items-center gap-1 text-xs text-white/50">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <button className="text-white/50 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* ÁREA DE MENSAJES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-white/20 text-white rounded-tr-sm border border-white/10' // Estilo usuario (Glass más fuerte)
                  : 'bg-black/20 text-white/90 rounded-tl-sm border border-white/5' // Estilo bot (Más oscuro)
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-white/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 bg-transparent border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all"
        />
        <button
          type="submit"
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10 flex items-center justify-center disabled:opacity-50"
          disabled={!input.trim()}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default GlassChatMock;
