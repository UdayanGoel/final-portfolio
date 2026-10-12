import React, { useState } from 'react';
import {
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Calendar,
  Mail,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const email = 'goeludayan@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/udayan-goel-ab102a403';
  const github = 'https://github.com/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className={`relative py-28 px-6 sm:px-12 md:px-16 select-none border-t transition-colors duration-300 ${
        isDark ? 'bg-[hsl(201,100%,10%)] border-border' : 'bg-[#F8F9FA] border-black/5'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Instrument Serif */}
        <div className="mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border ${
              isDark
                ? 'bg-white/5 border-white/10 text-muted-foreground'
                : 'bg-black/5 border-black/10 text-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>05 · INITIATE CONVERSATION</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-foreground mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Get in <em className="not-italic text-muted-foreground">Touch.</em>
          </h2>
          <p
            className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl ${
              isDark ? 'text-muted-foreground' : 'text-slate-600'
            }`}
          >
            Whether you're interested in collaborating on an AI exploration, discussing modern web architecture, or exploring software internships, my inbox is always open.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Direct Email Card with 1-click copy & Mailto launch */}
          <div
            className={`md:col-span-7 p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
              isDark
                ? 'bg-white/[0.03] border-white/10 hover:border-white/20'
                : 'bg-white border-black/10 hover:border-black/20 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest ${
                    isDark ? 'text-muted-foreground' : 'text-slate-500'
                  }`}
                >
                  DIRECT INBOX
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Response
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-2xl border ${
                    isDark ? 'bg-white/5 border-white/10 text-cyan-300' : 'bg-black/5 text-slate-900'
                  }`}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`text-lg sm:text-2xl font-bold tracking-tight truncate ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {email}
                  </h3>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    Fastest turnaround for research & professional discussions
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
              <button
                onClick={handleCopyEmail}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl border text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
                  copied
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                    : isDark
                    ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                    : 'bg-black/5 hover:bg-black/10 border-black/10 text-slate-800'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="liquid-glass flex-1 min-w-[140px] py-3 px-4 rounded-xl text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:scale-[1.03] active:scale-95 shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Verified Links (LinkedIn & GitHub) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between group ${
                isDark
                  ? 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                  : 'bg-white border-black/10 hover:border-black/20 hover:bg-slate-50 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-[#0077B5]/20 text-[#0077B5]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4
                    className={`text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    LinkedIn
                  </h4>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    Connect with Udayan Goel
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isDark
                    ? 'text-muted-foreground group-hover:text-white'
                    : 'text-slate-400 group-hover:text-slate-900'
                }`}
              />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between group ${
                isDark
                  ? 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                  : 'bg-white border-black/10 hover:border-black/20 hover:bg-slate-50 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`p-3 rounded-2xl ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-slate-900'
                  }`}
                >
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4
                    className={`text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    GitHub
                  </h4>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-muted-foreground' : 'text-slate-500'
                    }`}
                  >
                    Explore Open Repositories
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isDark
                    ? 'text-muted-foreground group-hover:text-white'
                    : 'text-slate-400 group-hover:text-slate-900'
                }`}
              />
            </a>
          </div>
        </div>

        {/* University & Location marker footer */}
        <div
          className={`mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'border-white/10 text-muted-foreground' : 'border-black/10 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              Jaipur, Rajasthan
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
              B.Tech CSE 2026-2030
            </span>
          </div>

          <span className="text-muted-foreground">
            JECRC University · Computer Science & Engineering
          </span>
        </div>
      </div>
    </section>
  );
};
