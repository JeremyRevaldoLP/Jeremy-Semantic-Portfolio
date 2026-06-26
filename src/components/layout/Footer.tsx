import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiSemanticweb } from 'react-icons/si';
import { personalInfo, navItems } from '../../data/profile';

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
              Mahasiswa Ilmu Komputer yang berdedikasi untuk membangun perangkat lunak bermanfaat dan menjelajahi Web Semantik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Tautan Cepat</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.filter(item => item.id !== 'hero').map(
                item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Kontak</h3>
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
            © {currentYear} {personalInfo.fullName}. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              Dibuat dengan <FiHeart className="text-red-500" size={14} /> & Web Semantik
            </span>
            <SiSemanticweb className="text-brand-500" size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
