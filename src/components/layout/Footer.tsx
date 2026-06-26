import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiSchemaorg } from 'react-icons/si';
import { personalInfo } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                JR
              </div>
              <span className="font-semibold text-[var(--text-primary)]">
                Jeremy<span className="text-brand-500">.</span>dev
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs">
              Computer Science student passionate about building meaningful software and exploring
              the Semantic Web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Semantic Web'].map(
                link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-brand-500 hover:border-brand-500/30 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-brand-500 hover:border-brand-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-brand-500 hover:border-brand-500/30 transition-all"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              Built with <FiHeart className="text-red-500" size={14} /> & Semantic Web
            </span>
            <SiSchemaorg className="text-brand-500" size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
