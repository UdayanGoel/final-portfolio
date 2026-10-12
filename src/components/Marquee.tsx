import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Brain,
  Code2,
  Terminal,
  Zap,
  Layers,
  Sparkles,
  GitBranch,
  Database,
  Globe,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves RIGHT on scroll
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  // Row 2 moves LEFT on scroll
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);

  const row1Items = [
    {
      type: 'badge',
      title: 'Artificial Intelligence',
      subtitle: 'Neural Architectures & Inference',
      icon: Brain,
    },
    {
      type: 'card',
      title: 'Deep Learning Visualizer',
      category: 'AI Pipeline',
      image: '/src/assets/images/ai_neural_visual_1790271106190.jpg',
    },
    {
      type: 'badge',
      title: 'TypeScript & React',
      subtitle: 'Modern Component Systems',
      icon: Code2,
    },
    {
      type: 'badge',
      title: 'Algorithmic Problem Solving',
      subtitle: 'Data Structures & Optimization',
      icon: Terminal,
    },
    {
      type: 'card',
      title: 'Productivity Matrix',
      category: 'Digital Systems',
      image: '/src/assets/images/project_productivity_workspace_1790271117381.jpg',
    },
    {
      type: 'badge',
      title: 'Digital Systems',
      subtitle: 'Focus & Workflow Architectures',
      icon: Zap,
    },
    {
      type: 'badge',
      title: 'Next-Gen Web Platforms',
      subtitle: 'Tailwind CSS & Motion',
      icon: Layers,
    },
  ];

  const row2Items = [
    {
      type: 'card',
      title: 'Intelligent Code Studio',
      category: 'Developer Tooling',
      image: '/src/assets/images/project_ai_code_studio_1790271126587.jpg',
    },
    {
      type: 'badge',
      title: 'LLM Prompt Engineering',
      subtitle: 'Gemini Models & Autonomous Agents',
      icon: Sparkles,
    },
    {
      type: 'badge',
      title: 'Python Ecosystem',
      subtitle: 'Scientific & Data Foundations',
      icon: Terminal,
    },
    {
      type: 'badge',
      title: 'Git Version Control',
      subtitle: 'Collaborative Workflows',
      icon: GitBranch,
    },
    {
      type: 'badge',
      title: 'System Architecture',
      subtitle: 'Modular REST & State Design',
      icon: Database,
    },
    {
      type: 'card',
      title: 'Neural Synthesizer',
      category: 'Core AI Model',
      image: '/src/assets/images/ai_neural_visual_1790271106190.jpg',
    },
    {
      type: 'badge',
      title: 'JECRC University CSE',
      subtitle: '1st Year Foundation & Research',
      icon: Globe,
    },
  ];

  // Duplicate items for continuous feel
  const duplicatedRow1 = [...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items];

  return (
    <section
      ref={containerRef}
      className={`relative py-16 sm:py-24 overflow-hidden select-none border-y transition-colors duration-300 ${
        isDark
          ? 'bg-[hsl(201,100%,10%)] border-border'
          : 'bg-[#F8F9FA] border-black/5'
      }`}
    >
      {/* Edge fade overlays */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-10 pointer-events-none transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-r from-[hsl(201,100%,10%)] via-[hsl(201,100%,10%)]/80 to-transparent'
            : 'bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-10 pointer-events-none transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-l from-[hsl(201,100%,10%)] via-[hsl(201,100%,10%)]/80 to-transparent'
            : 'bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent'
        }`}
      />

      {/* Row 1: Moves RIGHT on scroll */}
      <div className="relative mb-5 sm:mb-6 overflow-visible flex">
        <motion.div
          style={{ x: xRow1 }}
          className="flex gap-4 sm:gap-6 items-center shrink-0 will-change-transform"
        >
          {duplicatedRow1.map((item, index) => {
            if (item.type === 'card' && item.image) {
              return (
                <div
                  key={`r1-card-${index}`}
                  className={`w-72 sm:w-80 h-36 sm:h-40 rounded-2xl overflow-hidden relative shrink-0 group shadow-lg transition-all ${
                    isDark
                      ? 'border border-white/10 bg-white/[0.03] backdrop-blur-md'
                      : 'border border-black/10 bg-white'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(201,100%,7%)] via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-white truncate drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            }

            const Icon = item.icon!;
            return (
              <div
                key={`r1-badge-${index}`}
                className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl shrink-0 transition-all shadow-md group ${
                  isDark
                    ? 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white'
                    : 'border border-black/10 bg-white hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-cyan-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight whitespace-nowrap">
                    {item.title}
                  </div>
                  <div
                    className={`text-[11px] font-mono tracking-wider whitespace-nowrap ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="relative overflow-visible flex">
        <motion.div
          style={{ x: xRow2 }}
          className="flex gap-4 sm:gap-6 items-center shrink-0 will-change-transform"
        >
          {duplicatedRow2.map((item, index) => {
            if (item.type === 'card' && item.image) {
              return (
                <div
                  key={`r2-card-${index}`}
                  className={`w-72 sm:w-80 h-36 sm:h-40 rounded-2xl overflow-hidden relative shrink-0 group shadow-lg transition-all ${
                    isDark
                      ? 'border border-white/10 bg-white/[0.03] backdrop-blur-md'
                      : 'border border-black/10 bg-white'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(201,100%,7%)] via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-white truncate drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            }

            const Icon = item.icon!;
            return (
              <div
                key={`r2-badge-${index}`}
                className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl shrink-0 transition-all shadow-md group ${
                  isDark
                    ? 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white'
                    : 'border border-black/10 bg-white hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-cyan-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight whitespace-nowrap">
                    {item.title}
                  </div>
                  <div
                    className={`text-[11px] font-mono tracking-wider whitespace-nowrap ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
