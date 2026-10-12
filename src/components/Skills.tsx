import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { SkillItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillId, setActiveSkillId] = useState<string>('ai-llm');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skills: SkillItem[] = [
    {
      id: 'ai-llm',
      name: 'Artificial Intelligence & LLMs',
      category: 'AI & Data',
      level: 'Active Exploration & Integration',
      experience: 'Gemini Models · Neural Classifiers · Autonomous Agents',
      highlight:
        'Building intelligent workflows, multimodal prompt engineering, and conversational retrieval systems with modern SDKs.',
      tags: ['Prompt Engineering', 'Python', 'Embeddings', 'AI Agents'],
    },
    {
      id: 'react-ts',
      name: 'React 19 & TypeScript',
      category: 'Frontend & Web',
      level: 'Core Production Stack',
      experience: 'Component Systems · Custom Hooks · Strict Types',
      highlight:
        'Crafting resilient, high-speed single page applications with fluid state management, accessible UI, and type-safe contracts.',
      tags: ['TypeScript', 'Hooks', 'Vite', 'Component Architecture'],
    },
    {
      id: 'tailwind-motion',
      name: 'Tailwind CSS & Motion',
      category: 'Frontend & Web',
      level: 'Advanced UI/UX',
      experience: 'Spring Physics · Responsive Layouts · Micro-interactions',
      highlight:
        'Translating complex design concepts into fluid 60fps animations, magnetic interactions, and responsive design systems.',
      tags: ['Tailwind v4', 'Motion', 'Liquid Glass', 'Responsive'],
    },
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      category: 'Core CS',
      level: 'Active Academic Mastery',
      experience: 'Computational Complexity · Graphs · Trees · DP',
      highlight:
        'Deep computational rigor in C/C++ and Python, focusing on space-time efficiency and systematic problem-solving architectures.',
      tags: ['Complexity Analysis', 'Algorithms', 'C++', 'Data Structures'],
    },
    {
      id: 'python-dev',
      name: 'Python & Scientific Computing',
      category: 'AI & Data',
      level: 'Applied Scientific Stack',
      experience: 'Data Wrangling · Automation Scripts · Computer Vision',
      highlight:
        'Developing image processing routines, CV pipelines for agricultural health diagnostics, and mathematical scripting.',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Automation'],
    },
    {
      id: 'git-systems',
      name: 'Git & Systems Tooling',
      category: 'Productivity & Tools',
      level: 'Daily Engineering Standard',
      experience: 'Semantic Versioning · CI/CD · CLI Environments',
      highlight:
        'Maintaining clean commit histories, branching strategies, and reproducible local development environments on Linux.',
      tags: ['Git', 'GitHub', 'Linux Shell', 'Build Tooling'],
    },
  ];

  const categories = ['All', 'AI & Data', 'Frontend & Web', 'Core CS', 'Productivity & Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const activeSkill = skills.find((s) => s.id === activeSkillId) || skills[0];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Data':
        return <Brain className="w-4 h-4 text-cyan-300" />;
      case 'Frontend & Web':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Core CS':
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'Productivity & Tools':
        return <Terminal className="w-4 h-4 text-teal-300" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-300" />;
    }
  };

  return (
    <section
      id="skills"
      className={`relative py-28 px-6 sm:px-12 md:px-16 select-none transition-colors duration-300 ${
        isDark ? 'bg-[hsl(201,100%,11%)]' : 'bg-[#F8F9FA]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Instrument Serif */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                isDark ? 'text-muted-foreground' : 'text-slate-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>04 · TECHNICAL CAPABILITIES</span>
            </div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Technical <em className="not-italic text-muted-foreground">Expertise.</em>
            </h2>
          </div>

          <p
            className={`text-sm max-w-md font-light leading-relaxed ${
              isDark ? 'text-muted-foreground' : 'text-slate-600'
            }`}
          >
            A cohesive skill set balancing computational theory with hands-on modern software engineering and AI exploration.
          </p>
        </div>

        {/* Filter Bar & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div
            className={`flex items-center gap-1.5 p-1.5 rounded-2xl border backdrop-blur-md overflow-x-auto no-scrollbar max-w-full ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-black/10 shadow-sm'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-white/10 text-white border border-white/20 shadow-md font-semibold'
                      : 'bg-slate-900 text-white shadow-md font-semibold'
                    : isDark
                    ? 'text-muted-foreground hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-white border-black/10 hover:bg-slate-50 text-slate-800 shadow-sm'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-white border-black/10 hover:bg-slate-50 text-slate-800 shadow-sm'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scroll-smooth"
        >
          {filteredSkills.map((skill) => {
            const isSelected = activeSkillId === skill.id;
            return (
              <motion.div
                key={skill.id}
                onClick={() => setActiveSkillId(skill.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`w-[290px] sm:w-[320px] p-6 rounded-3xl border shrink-0 snap-start cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? isDark
                      ? 'bg-white/[0.06] border-white/30 shadow-2xl ring-1 ring-white/20'
                      : 'bg-white border-slate-900/30 shadow-xl ring-1 ring-slate-900/20'
                    : isDark
                    ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    : 'bg-white border-black/10 hover:border-black/20 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                      }`}
                    >
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        isDark
                          ? 'border-white/10 text-muted-foreground bg-white/5'
                          : 'border-black/10 text-slate-600 bg-slate-100'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  <p
                    className={`text-xs font-mono mb-4 ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700 font-semibold'
                    }`}
                  >
                    {skill.level}
                  </p>

                  <p
                    className={`text-xs font-light leading-relaxed line-clamp-3 ${
                      isDark ? 'text-muted-foreground' : 'text-slate-600'
                    }`}
                  >
                    {skill.highlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                  {skill.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                        isDark
                          ? 'border-white/10 bg-white/5 text-[#D7E2EA]'
                          : 'border-black/10 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Deep Dive Spec Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 p-6 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden shadow-2xl ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-black/10 shadow-xl'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span
                    className={`text-xs font-mono uppercase tracking-widest ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    ACTIVE SPECIFICATION · {activeSkill.category}
                  </span>
                </div>
                <h4
                  className={`text-2xl sm:text-4xl font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {activeSkill.name}
                </h4>
                <p
                  className={`text-sm font-light mt-2 max-w-3xl leading-relaxed ${
                    isDark ? 'text-[#D7E2EA]' : 'text-slate-700'
                  }`}
                >
                  {activeSkill.highlight}
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border shrink-0 text-left sm:text-right ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-black/10'
                }`}
              >
                <div
                  className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-500'
                  }`}
                >
                  CURRENT STACK COVERAGE
                </div>
                <div
                  className={`text-xs font-mono font-semibold ${
                    isDark ? 'text-cyan-300' : 'text-slate-800'
                  }`}
                >
                  {activeSkill.experience}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
