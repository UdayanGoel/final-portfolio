import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Cpu,
  CheckCircle2,
  X,
  ArrowUpRight,
  Leaf,
  Scan,
  Code2,
  Clock,
  Filter,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ProjectItem } from '../types';

interface ProjectWithCategory extends ProjectItem {
  categoryKey: 'ai' | 'web';
}

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'web'>('all');
  const [modalOpen, setModalOpen] = useState(false);

  const projectsList: ProjectWithCategory[] = [
    {
      id: 'ai-crop-scanner',
      title: 'AI Based Crop Scanner',
      subtitle: 'Computer Vision & Agricultural Diagnostics',
      category: 'AI PROJECT',
      categoryKey: 'ai',
      description:
        'An intelligent agricultural assistance tool that uses computer vision algorithms to detect early-stage crop infections and nutrient deficiencies. Designed to assist agriculturalists and students with instant plant health diagnostics.',
      highlights: [
        'Real-time leaf image scanning & health scoring',
        'Pretrained neural classifier for crop diseases',
        'Automated organic and chemical treatment advice',
        'Offline-capable caching and diagnostic history',
      ],
      tags: [
        'Python',
        'Computer Vision',
        'Artificial Intelligence',
        'TensorFlow',
        'Web API',
      ],
      metrics: '94%+ Neural Diagnostic Accuracy',
    },
  ];

  const categories = [
    {
      id: 'all' as const,
      label: 'All',
      count: projectsList.length,
    },
    {
      id: 'ai' as const,
      label: 'AI',
      count: projectsList.filter((p) => p.categoryKey === 'ai').length,
    },
    {
      id: 'web' as const,
      label: 'Web Dev',
      count: projectsList.filter((p) => p.categoryKey === 'web').length,
    },
  ];

  const filteredProjects = projectsList.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categoryKey === activeCategory;
  });

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const handleDiscussClick = () => {
    setModalOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cropScannerProject = projectsList[0];

  return (
    <section
      id="projects"
      className={`relative py-28 px-6 sm:px-12 md:px-16 select-none transition-colors duration-300 ${
        isDark ? 'bg-[hsl(201,100%,10%)]' : 'bg-[#F8F9FA]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Instrument Serif */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                isDark ? 'text-muted-foreground' : 'text-slate-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>03 · FEATURED WORK</span>
            </div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Featured <em className="not-italic text-muted-foreground">Projects.</em>
            </h2>
          </div>
          <p
            className={`text-sm max-w-md font-light leading-relaxed ${
              isDark ? 'text-muted-foreground' : 'text-slate-600'
            }`}
          >
            Engineered at the intersection of artificial intelligence, computer vision, and real-world agricultural assistance.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            className={`inline-flex items-center p-1.5 rounded-2xl border backdrop-blur-md transition-colors duration-300 ${
              isDark
                ? 'bg-white/[0.03] border-white/10'
                : 'bg-white border-black/10 shadow-sm'
            }`}
          >
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-muted-foreground' : 'text-slate-400'
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-cyan-300" />
              <span className="hidden sm:inline">Filter:</span>
            </div>

            <div className="flex items-center gap-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'bg-white/10 text-white border border-white/20 shadow-md font-semibold'
                          : 'bg-slate-900 text-white border border-slate-900 shadow-md font-semibold'
                        : isDark
                        ? 'text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 border border-transparent'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                        isActive
                          ? isDark
                            ? 'bg-white/20 text-white'
                            : 'bg-white/20 text-white'
                          : isDark
                          ? 'bg-white/5 text-muted-foreground'
                          : 'bg-black/5 text-slate-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`text-xs font-mono tracking-wider ${
              isDark ? 'text-muted-foreground' : 'text-slate-400'
            }`}
          >
            Showing {filteredProjects.length} of {projectsList.length} project
            {projectsList.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Dynamic Project Display via Filter */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -6, scale: 1.008 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                    mass: 0.8,
                    delay: index * 0.1,
                  }}
                  className={`w-full rounded-3xl p-6 sm:p-10 md:p-12 border relative overflow-hidden transition-colors duration-300 shadow-2xl group ${
                    isDark
                      ? 'bg-white/[0.03] border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.04]'
                      : 'bg-white border-black/10 hover:border-cyan-700/30 hover:shadow-2xl'
                  }`}
                >
                  {/* Subtle Ambient Hover Glow */}
                  <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Top Row: Category Badge & Diagnostic Accuracy */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                        {project.category}
                      </span>
                      <span
                        className={`text-xs font-mono uppercase tracking-wider hidden sm:inline-block ${
                          isDark ? 'text-muted-foreground' : 'text-slate-400'
                        }`}
                      >
                        DEPLOYMENT SPEC
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Main Title & Subheading */}
                  <div className="relative z-10 mb-6">
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-mono uppercase tracking-widest mt-1.5 ${
                        isDark ? 'text-muted-foreground' : 'text-slate-600'
                      }`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Main Description */}
                  <p
                    className={`font-mono text-sm sm:text-base leading-relaxed max-w-4xl mb-8 relative z-10 ${
                      isDark ? 'text-[#D7E2EA]' : 'text-slate-700'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Key Architectural Highlights Container */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border mb-8 relative z-10 ${
                      isDark
                        ? 'bg-[hsl(201,100%,8%)]/60 border-white/10'
                        : 'bg-slate-50 border-black/10 shadow-sm'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-5 ${
                        isDark ? 'text-muted-foreground' : 'text-slate-700 font-semibold'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-300" />
                      <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 font-mono text-xs sm:text-sm">
                      {project.highlights?.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-[#D7E2EA]' : 'text-slate-800'}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used & Actions Footer */}
                  <div
                    className={`pt-6 border-t flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    }`}
                  >
                    {/* Tech Badges */}
                    <div>
                      <div
                        className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                          isDark ? 'text-muted-foreground' : 'text-slate-500'
                        }`}
                      >
                        <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                        <span>TECHNOLOGIES USED</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
                              isDark
                                ? 'bg-white/5 border-white/10 text-white'
                                : 'bg-white border-black/10 text-slate-800 shadow-sm'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <button
                        onClick={() => setModalOpen(true)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                          isDark
                            ? 'bg-white/5 hover:bg-white/10 border-white/15 text-white'
                            : 'bg-black/5 hover:bg-black/10 border-black/15 text-slate-800 shadow-sm'
                        }`}
                      >
                        <Scan className="w-3.5 h-3.5 text-cyan-300" />
                        <span>Inspect Spec</span>
                      </button>

                      <button
                        onClick={handleDiscussClick}
                        className="liquid-glass inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white hover:scale-[1.03] transition-all cursor-pointer shadow-lg"
                      >
                        <span>Discuss Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State for category with no projects yet (e.g. Web Dev) */
            <motion.div
              key="empty-category"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35 }}
              className={`w-full rounded-3xl p-10 sm:p-16 border text-center flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 shadow-2xl ${
                isDark
                  ? 'bg-white/[0.02] border-white/10'
                  : 'bg-white border-black/10 shadow-xl'
              }`}
            >
              <div
                className={`p-4 rounded-2xl border mb-5 relative z-10 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-cyan-300'
                    : 'bg-black/5 border-black/10 text-slate-900'
                }`}
              >
                <Code2 className="w-8 h-8 text-cyan-300" />
              </div>

              <span
                className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border mb-4 relative z-10 ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-muted-foreground'
                    : 'bg-black/5 border-black/10 text-slate-700'
                }`}
              >
                WEB DEV · IN ACTIVE DEVELOPMENT
              </span>

              <h3
                className={`text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight relative z-10 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                No Web Dev Projects <em className="not-italic text-muted-foreground">Published Yet</em>
              </h3>

              <p
                className={`mt-3 max-w-lg text-sm sm:text-base font-light leading-relaxed relative z-10 ${
                  isDark ? 'text-muted-foreground' : 'text-slate-600'
                }`}
              >
                Currently building responsive frontend architectures, experimental TypeScript applications, and modern API integrations. New deployments will be listed here soon.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 relative z-10">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border-white/15 text-white'
                      : 'bg-black/5 hover:bg-black/10 border-black/15 text-slate-800'
                  }`}
                >
                  Show All Work ({projectsList.length})
                </button>
                <button
                  onClick={() => setActiveCategory('ai')}
                  className="liquid-glass px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white hover:scale-[1.03] transition-all cursor-pointer flex items-center gap-2"
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                  <span>View AI Project</span>
                </button>
              </div>

              <div
                className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-4 text-xs font-mono relative z-10 ${
                  isDark ? 'border-white/10 text-muted-foreground' : 'border-black/10 text-slate-500'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-300" />
                  Expected Release: 2026 Academic Sprints
                </span>
                <span>·</span>
                <span>React 19 & Tailwind CSS</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Modal matching the project blueprint */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-[hsl(201,100%,6%)]/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 md:p-10 border shadow-2xl z-10 overflow-hidden ${
                isDark
                  ? 'bg-[hsl(201,100%,9%)] border-white/15 text-[#D7E2EA]'
                  : 'bg-white border-black/15 text-slate-900'
              }`}
            >
              {/* Header: AI PROJECT badge & Close Button */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Leaf className="w-3 h-3 text-emerald-400" />
                  {cropScannerProject.category}
                </span>

                <button
                  onClick={() => setModalOpen(false)}
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-[#D7E2EA] hover:text-white'
                      : 'bg-black/5 border-black/10 hover:bg-black/10 text-slate-700 hover:text-black'
                  }`}
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title with Instrument Serif */}
              <h3
                className={`text-3xl sm:text-4xl font-normal tracking-tight mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {cropScannerProject.title}
              </h3>

              {/* Description in monospace style */}
              <p
                className={`font-mono text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-[#D7E2EA]' : 'text-slate-700'
                }`}
              >
                {cropScannerProject.description}
              </p>

              {/* Highlights Box */}
              <div
                className={`p-5 sm:p-6 rounded-2xl border mb-6 ${
                  isDark
                    ? 'bg-[hsl(201,100%,7%)] border-white/10'
                    : 'bg-slate-50 border-black/10'
                }`}
              >
                <div
                  className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-4 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-700 font-semibold'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  {cropScannerProject.highlights?.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-[#D7E2EA]' : 'text-slate-800'}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <div
                  className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                    isDark ? 'text-muted-foreground' : 'text-slate-500'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                  <span>TECHNOLOGIES USED</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cropScannerProject.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-white'
                          : 'bg-white border-black/10 text-slate-800 shadow-sm'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions: Close & Discuss Project */}
              <div
                className={`pt-5 border-t flex items-center justify-end gap-3 ${
                  isDark ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium border transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 text-[#D7E2EA]'
                      : 'bg-black/5 border-black/10 hover:bg-black/10 text-slate-700'
                  }`}
                >
                  Close
                </button>

                <button
                  onClick={handleDiscussClick}
                  className="liquid-glass inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white hover:scale-[1.03] transition-all cursor-pointer shadow-md"
                >
                  <span>Discuss Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
