import React, { useState } from 'react';
import { Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    title: "El renacimiento del Glassmorphism en 2024",
    excerpt: "Por qué las interfaces translúcidas están volviendo con fuerza a la web moderna.",
    category: "Diseño UI",
    date: "Hace 2 horas",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nueva IA generativa rompe récords de velocidad",
    excerpt: "El modelo 'Turbo-X' procesa tokens 50 veces más rápido que sus predecesores.",
    category: "Tecnología",
    date: "Hace 4 horas",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "React 19: Todo lo que necesitas saber",
    excerpt: "Compiladores automáticos y el fin de los useMemo manuales.",
    category: "Dev",
    date: "Hace 6 horas",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&auto=format&fit=crop"
  }
];

const GlassNewsFeed = () => {
  return (
    // CONTENEDOR PRINCIPAL
    // Misma estética: border-white/30, blur, etc.
    <div className="max-w-md w-full bg-black/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden font-sans shadow-2xl">
      
      {/* HEADER */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-400" />
            Novedades
          </h2>
          <p className="text-white/50 text-xs mt-1">Actualizado en tiempo real</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/70">
          Hoy
        </span>
      </div>

      {/* LISTA DE NOTICIAS */}
      <div className="divide-y divide-white/10">
        {mockNews.map((news) => (
          <div 
            key={news.id} 
            className="group p-5 hover:bg-white/5 transition-all duration-300 cursor-pointer flex gap-4"
          >
            {/* IMAGEN THUMBNAIL */}
            <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
               {/* Overlay sutil en la imagen */}
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
               <img 
                 src={news.imageUrl} 
                 alt={news.title} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
            </div>

            {/* CONTENIDO TEXTO */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-blue-300">
                    <Tag size={10} />
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/40">
                    <Clock size={10} />
                    {news.date}
                  </span>
                </div>
                <h3 className="text-white font-medium text-sm leading-snug group-hover:text-blue-200 transition-colors">
                  {news.title}
                </h3>
                <p className="text-white/50 text-xs mt-1 line-clamp-2">
                  {news.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER / BOTÓN VER MÁS */}
      {/* Aquí reutilizo casi exacto el estilo de tu botón original para mantener consistencia */}
      <div className="p-4 bg-white/5 border-t border-white/10">
        <button className="w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-white border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all active:scale-[0.98]">
          Ver todas las noticias
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default GlassNewsFeed;