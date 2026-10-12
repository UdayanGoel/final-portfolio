import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Brain,
  Code,
  Layers,
  Compass,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
  isDark: boolean;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress, isDark }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    isDark ? ['hsl(215 20% 40%)', '#FFFFFF'] : ['#94A3B8', '#0F172A']
  );

  return (
    <motion.span style={{ opacity, color }} className="inline transition-colors">
      {char}
    </motion.span>
  );
};

export const AboutEducation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const fullText =
    "Computer Science engineer at JECRC University specializing in artificial intelligence and modern web architectures. Grounded in computational fundamentals, I engineer high-performance systems and intelligent diagnostic tools that bridge mathematical precision with seamless digital experiences.";

  const wordsWithRanges = React.useMemo(() => {
    let offset = 0;
    const total = fullText.length;
    return fullText.split(' ').map((word, wIdx) => {
      const chars = word.split('').map((char, cIdx) => {
        const start = offset / total;
        offset += 1;
        const end = offset / total;
        return { id: `c-${wIdx}-${cIdx}`, char, range: [start, end] as [number, number] };
      });
      offset += 1;
      return { id: `w-${wIdx}`, word, chars };
    });
  }, [fullText]);

  const engineeringPillars = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-300" />,
      title: 'Applied AI & Computer Vision',
      tagline: 'Intelligent Inference',
      desc: 'Developing specialized neural classifiers, computer vision pipelines, and diagnostic algorithms designed for tangible agricultural and diagnostic problems.',
    },
    {
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      title: 'Full-Stack Web Engineering',
      tagline: 'Modern Architectures',
      desc: 'Architecting performant, type-safe digital platforms using React, TypeScript, and modern API standards with an emphasis on fluid interactivity.',
    },
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: 'Algorithmic Foundations',
      tagline: 'Computational Rigor',
      desc: 'Strengthening core data structures, algorithmic complexity optimization, and clean architectural design patterns for scalable software systems.',
    },
  ];

  const focusAreas = [
    {
      title: 'Artificial Intelligence',
      subtitle: 'Neural nets, vision classifiers & inference APIs',
    },
    {
      title: 'Modern Web Engineering',
      subtitle: 'React, TypeScript, component systems & REST/Web APIs',
    },
    {
      title: 'Data Structures & Algorithms',
      subtitle: 'Algorithmic optimization, graphs & complexity analysis',
    },
    {
      title: 'Applied System Architecture',
      subtitle: 'Production workflows, modularity & resilient UI/UX',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden flex flex-col justify-center items-center select-none transition-colors duration-300 ${
        isDark ? 'bg-[hsl(201,100%,11%)]' : 'bg-[#F8F9FA]'
      }`}
    >
      {/* 4 FLOATING 3D DECORATIVE ASSETS IN THE CORNERS */}

      {/* 1. Top-Left 3D Asset: Floating Geometric Polyhedron */}
      <div className="absolute top-12 left-6 sm:left-12 pointer-events-none z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotateZ: [0, 15, -10, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-20 h-20 sm:w-28 sm:h-28 relative opacity-40 hover:opacity-70 transition-opacity"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            <defs>
              <linearGradient id="gradTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="url(#gradTopLeft)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="10" y1="25" x2="90" y2="75" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="10" y1="75" x2="90" y2="25" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>

      {/* 2. Top-Right 3D Asset: Floating Torus / Crystalline Ring */}
      <div className="absolute top-14 right-6 sm:right-12 pointer-events-none z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotateX: [0, 45, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-20 h-20 sm:w-28 sm:h-28 relative opacity-40 hover:opacity-70 transition-opacity"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(14,165,233,0.3)]">
            <defs>
              <linearGradient id="gradTopRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="22"
              fill="none"
              stroke="url(#gradTopRight)"
              strokeWidth="4"
              strokeDasharray="16 6"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="24"
              ry="12"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      {/* 3. Bottom-Left 3D Asset */}
      <div className="absolute bottom-12 left-6 sm:left-14 pointer-events-none z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, -16, 0],
            rotateY: [0, 360],
            rotateZ: [5, -15, 5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-18 h-18 sm:w-24 sm:h-24 relative opacity-40 hover:opacity-70 transition-opacity"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            <defs>
              <linearGradient id="gradBottomLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <polygon
              points="50,10 90,80 10,80"
              fill="url(#gradBottomLeft)"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.5"
            />
            <line x1="50" y1="10" x2="50" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <polygon
              points="50,10 75,55 50,80"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </div>

      {/* 4. Bottom-Right 3D Asset */}
      <div className="absolute bottom-14 right-6 sm:right-14 pointer-events-none z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotateZ: [360, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-20 h-20 sm:w-28 sm:h-28 relative opacity-40 hover:opacity-70 transition-opacity"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="18"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="1.5"
              transform="rotate(35 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="18"
              fill="none"
              stroke="#0369a1"
              strokeWidth="1.5"
              transform="rotate(-35 50 50)"
            />
            <circle cx="50" cy="50" r="4" fill="#38bdf8" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-20">
        {/* Section Heading with Instrument Serif */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border border-white/10 bg-white/5 text-muted-foreground">
            <Compass className="w-3.5 h-3.5 text-cyan-300" />
            <span>01 · PROFILE & VISION</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            About <em className="not-italic text-muted-foreground">Me.</em>
          </h2>
        </div>

        {/* Animated Paragraph: Character scroll reveal */}
        <div ref={textRef} className="my-10 sm:my-14 max-w-4xl px-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-center">
            {wordsWithRanges.map((w) => (
              <span
                key={w.id}
                className="inline-block whitespace-nowrap mr-[0.32em] my-0.5"
              >
                {w.chars.map((c) => (
                  <Character
                    key={c.id}
                    char={c.char}
                    range={c.range}
                    progress={textProgress}
                    isDark={isDark}
                  />
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-14 text-left">
          {engineeringPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden group shadow-lg ${
                isDark
                  ? 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  : 'bg-white border-black/10 hover:border-black/20 hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-2xl ${
                    isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5'
                  }`}
                >
                  {pillar.icon}
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest ${
                    isDark ? 'text-muted-foreground' : 'text-slate-400'
                  }`}
                >
                  {pillar.tagline}
                </span>
              </div>
              <h3
                className={`text-lg font-bold tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {pillar.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-light leading-relaxed ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION SECTION CARD */}
        <div id="education" className="w-full mt-2 text-left">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-muted-foreground' : 'text-slate-500'
              }`}
            >
              02 · ACADEMIC FOUNDATION
            </span>
            <span className={`text-xs font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              ACCREDITED DEGREE TRACK
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden group transition-all duration-300 shadow-2xl ${
              isDark
                ? 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                : 'bg-white border border-black/10 hover:border-black/20 shadow-xl'
            }`}
          >
            <div
              className={`relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-muted-foreground'
                      : 'bg-black/5 border-black/10 text-slate-700'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />
                  <span>BACHELOR OF TECHNOLOGY</span>
                </div>
                <h3
                  className={`text-2xl sm:text-4xl font-normal tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Computer Science & Engineering (Core)
                </h3>
                <div
                  className={`flex flex-wrap items-center gap-3 sm:gap-4 text-sm mt-2 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-600'
                  }`}
                >
                  <span
                    className={`flex items-center gap-1.5 font-medium ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-cyan-300" />
                    <span>JECRC University</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 opacity-60" />
                    <span>Jaipur, Rajasthan, India</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 opacity-60" />
                    <span>Cohort 2026–Present</span>
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div
                className={`shrink-0 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 p-3 sm:p-4 rounded-2xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase ${
                    isDark ? 'text-muted-foreground' : 'text-slate-500'
                  }`}
                >
                  ACADEMIC STANDING
                </span>
                <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  1st Year Undergraduate
                </span>
              </div>
            </div>

            {/* Core Focus Areas */}
            <div className="relative z-10 pt-6">
              <h4
                className={`text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2 ${
                  isDark ? 'text-muted-foreground' : 'text-slate-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Curricular Focus & Specialization Domains</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className={`p-4 rounded-2xl border transition-all duration-200 ${
                      isDark
                        ? 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                        : 'bg-slate-50 border-black/5 hover:border-black/15 hover:bg-slate-100 shadow-sm'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{area.title}</span>
                    </div>
                    <p
                      className={`text-[11px] mt-1.5 pl-6 leading-relaxed ${
                        isDark ? 'text-muted-foreground' : 'text-slate-500'
                      }`}
                    >
                      {area.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
