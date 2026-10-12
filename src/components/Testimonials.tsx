import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Quote,
  Star,
  CheckCircle2,
  Building2,
  Plus,
  X,
  MessageSquareQuote,
  Trash2,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface UserReview {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: string;
  rating: number;
  quote: string;
  projectMentioned?: string;
  date: string;
  initials: string;
}

const STORAGE_KEY = 'portfolio-user-reviews';

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [reviews, setReviews] = useState<UserReview[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) return parsed;
        }
      } catch {
        // Fallback to empty
      }
    }
    return [];
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [category, setCategory] = useState('Peer & Collaborator');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [projectMentioned, setProjectMentioned] = useState('');
  const [quote, setQuote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // Storage restricted
    }
  }, [reviews]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
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

  const handleOpenModal = () => {
    setName('');
    setRole('');
    setOrganization('');
    setCategory('Peer & Collaborator');
    setRating(5);
    setHoverRating(0);
    setProjectMentioned('');
    setQuote('');
    setErrorMessage('');
    setModalOpen(true);
  };

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase() || 'UG';
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) {
      setErrorMessage('Please provide your name and endorsement message.');
      return;
    }

    const newReview: UserReview = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: name.trim(),
      role: role.trim() || 'Software Engineer',
      organization: organization.trim() || 'Tech Collaborator',
      category,
      rating,
      quote: quote.trim(),
      projectMentioned: projectMentioned.trim() || undefined,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      initials: getInitials(name),
    };

    setReviews((prev) => [newReview, ...prev]);
    setModalOpen(false);
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 3500);
  };

  const handleDeleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <section
      id="testimonials"
      className={`relative py-28 px-6 sm:px-12 md:px-16 select-none transition-colors duration-300 border-t ${
        isDark ? 'bg-[hsl(201,100%,11%)] border-border' : 'bg-[#F8F9FA] border-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                isDark ? 'text-muted-foreground' : 'text-slate-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>05 · COMMUNITY & PEER FEEDBACK</span>
            </div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Reviews & <em className="not-italic text-muted-foreground">Endorsements.</em>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleOpenModal}
              className="liquid-glass rounded-full px-7 py-3 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer inline-flex items-center gap-2 font-medium shadow-lg"
            >
              <Plus className="w-4 h-4 text-cyan-300" />
              <span>Add Review</span>
            </button>
          </div>
        </div>

        {/* Success confirmation toast */}
        <AnimatePresence>
          {successToast && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! Your endorsement has been published.</span>
              </div>
              <button
                onClick={() => setSuccessToast(false)}
                className="text-xs opacity-70 hover:opacity-100 uppercase font-mono cursor-pointer"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Container */}
        {reviews.length === 0 ? (
          /* Empty State when no reviews are present */
          <div
            className={`w-full rounded-3xl p-10 sm:p-16 border text-center flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 shadow-xl ${
              isDark
                ? 'bg-white/[0.02] border-white/10'
                : 'bg-white border-black/10 shadow-lg'
            }`}
          >
            <div
              className={`p-4 rounded-2xl border mb-5 ${
                isDark
                  ? 'bg-white/5 border-white/10 text-cyan-300'
                  : 'bg-black/5 border-black/10 text-slate-800'
              }`}
            >
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            <h3
              className={`text-2xl sm:text-4xl font-normal tracking-tight mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Be the First to <em className="not-italic text-muted-foreground">Leave a Review</em>
            </h3>

            <p
              className={`max-w-lg text-sm sm:text-base font-light leading-relaxed mb-8 ${
                isDark ? 'text-muted-foreground' : 'text-slate-600'
              }`}
            >
              Have you collaborated on research, built a project, or studied with Udayan? Share your feedback to help enhance this portfolio.
            </p>

            <button
              onClick={handleOpenModal}
              className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer inline-flex items-center gap-2 font-medium"
            >
              <Plus className="w-4 h-4 text-cyan-300" />
              <span>Add Review</span>
            </button>
          </div>
        ) : (
          /* Grid of submitted reviews */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {reviews.map((r) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xl ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10 hover:border-white/25'
                    : 'bg-white border-black/10 hover:border-black/20 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar: Category badge, stars, and remove button */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-cyan-300'
                          : 'bg-slate-100 border-black/10 text-cyan-800'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{r.category}</span>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <button
                        onClick={() => handleDeleteReview(r.id)}
                        className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity p-1 text-muted-foreground hover:text-red-400 cursor-pointer"
                        title="Remove review"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote
                    className={`w-6 h-6 mb-3 opacity-30 ${
                      isDark ? 'text-cyan-300' : 'text-slate-400'
                    }`}
                  />

                  {/* Main Quote Content */}
                  <p
                    className={`text-sm font-light leading-relaxed mb-6 ${
                      isDark ? 'text-[#D7E2EA]' : 'text-slate-700'
                    }`}
                  >
                    "{r.quote}"
                  </p>
                </div>

                {/* Footer: Author Info & Project Mention */}
                <div className="pt-4 border-t border-white/10">
                  {r.projectMentioned && (
                    <div
                      className={`text-[10px] font-mono uppercase tracking-widest mb-3 flex items-center gap-1.5 ${
                        isDark ? 'text-muted-foreground' : 'text-slate-500'
                      }`}
                    >
                      <Building2 className="w-3 h-3 text-cyan-300" />
                      <span>Focus: {r.projectMentioned}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        isDark
                          ? 'bg-white/5 border-white/15 text-white'
                          : 'bg-slate-100 border-black/10 text-slate-900'
                      }`}
                    >
                      {r.initials}
                    </div>

                    <div className="min-w-0">
                      <h4
                        className={`text-sm font-semibold truncate ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {r.name}
                      </h4>
                      <p
                        className={`text-xs truncate ${
                          isDark ? 'text-muted-foreground' : 'text-slate-500'
                        }`}
                      >
                        {r.role} · {r.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Review Submission Modal Dialog */}
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
              className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl z-10 overflow-hidden ${
                isDark
                  ? 'bg-[hsl(201,100%,9%)] border-white/15 text-[#D7E2EA]'
                  : 'bg-white border-black/15 text-slate-900'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    COMMUNITY FEEDBACK
                  </span>
                </div>

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

              <h3
                className={`text-2xl sm:text-3xl font-normal tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Add Your <em className="not-italic text-muted-foreground">Endorsement.</em>
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Share your experience collaborating with Udayan on academic projects or technical workflows.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                        : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                    }`}
                  />
                </div>

                {/* Role & Organization Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Student / Developer"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. JECRC University"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                      }`}
                    />
                  </div>
                </div>

                {/* Relationship Category & Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                      Relationship
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        isDark
                          ? 'bg-[hsl(201,100%,8%)] border-white/10 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                      }`}
                    >
                      <option value="Peer & Collaborator">Peer & Collaborator</option>
                      <option value="Academic Faculty">Academic Faculty</option>
                      <option value="Industry Mentor">Industry Mentor</option>
                      <option value="Project Partner">Project Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                      Rating
                    </label>
                    <div className="flex items-center gap-1.5 h-[42px] px-3 rounded-xl border border-white/10 bg-white/5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          className="p-0.5 text-amber-400 transition-transform hover:scale-110 cursor-pointer"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= (hoverRating || rating) ? 'fill-current' : 'opacity-30'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono ml-2 text-muted-foreground">
                        {rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Optional Project Mentioned */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                    Project Focus (Optional)
                  </label>
                  <input
                    type="text"
                    value={projectMentioned}
                    onChange={(e) => setProjectMentioned(e.target.value)}
                    placeholder="e.g. AI Crop Scanner, Web Architecture, etc."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                        : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                    }`}
                  />
                </div>

                {/* Endorsement Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 text-muted-foreground">
                    Review / Endorsement Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Share feedback on technical performance, communication, or code quality..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                        : 'bg-slate-50 border-black/10 text-slate-900 focus:border-slate-800'
                    }`}
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-mono border border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="liquid-glass rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:scale-[1.03] transition-transform cursor-pointer"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
