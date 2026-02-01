"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  theme?: "light" | "dark" | "voc";
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ 
  testimonials, 
  theme = "light",
  title = "What Our Clients Say",
  subtitle = "Real results from real professionals."
}: TestimonialsProps) {
  const themes = {
    light: {
      section: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      card: "bg-gray-50 border-gray-100",
      quote: "text-gray-600",
      quoteMark: "text-[#f97316]/10",
      avatar: "bg-[#f97316]/10 text-[#f97316]",
      authorName: "text-gray-900",
      authorRole: "text-[#f97316]",
    },
    dark: {
      section: "bg-[#0a0a0a]",
      title: "text-white",
      subtitle: "text-gray-400",
      card: "bg-white/[0.02] border-white/10",
      quote: "text-gray-400",
      quoteMark: "text-[#f97316]/10",
      avatar: "bg-[#f97316]/10 text-[#f97316]",
      authorName: "text-white",
      authorRole: "text-[#f97316]",
    },
    voc: {
      section: "bg-[#030503]",
      title: "text-white",
      subtitle: "text-gray-400",
      card: "bg-[#0d1a0d] border-[#00ff41]/20",
      quote: "text-gray-300",
      quoteMark: "text-[#00ff41]/10",
      avatar: "bg-[#00ff41]/20 text-[#00ff41]",
      authorName: "text-white",
      authorRole: "text-[#00ff41]",
    },
  };

  const t = themes[theme];

  return (
    <section className={`py-24 px-6 ${t.section}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-[clamp(32px,4vw,44px)] font-bold leading-tight mb-4 ${t.title}`}>
            {title}
          </h2>
          <p className={`text-[18px] ${t.subtitle}`}>
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border ${t.card}`}
            >
              {/* Quote mark */}
              <div className={`absolute top-4 left-4 text-8xl font-serif leading-none ${t.quoteMark}`}>"</div>
              
              <div className="relative z-10">
                <p className={`text-[16px] leading-relaxed mb-6 italic ${t.quote}`}>
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.avatar}`}>
                      {item.author[0]}
                    </div>
                  )}
                  <div>
                    <div className={`font-semibold ${t.authorName}`}>{item.author}</div>
                    <div className={`text-sm ${t.authorRole}`}>{item.role}</div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect for VOC theme */}
              {theme === "voc" && (
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00ff41]/10 rounded-full blur-3xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
