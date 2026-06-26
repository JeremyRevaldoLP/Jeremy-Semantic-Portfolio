import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';
import { SiSemanticweb } from 'react-icons/si';
import { getJsonLdSnippets } from '../../lib/jsonld';
import { rdfTriples } from '../../data/semantic';
import { schemaEntities } from '../../data/semantic';

export default function StructuredDataPage() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);
  const snippets = getJsonLdSnippets();

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-brand-500 transition-colors mb-6 cursor-pointer"
          >
            <FiArrowLeft size={16} />
            Kembali ke Profil
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <SiSemanticweb className="text-brand-500" size={32} />
              <h1 className="text-3xl sm:text-4xl font-bold gradient-text">Data Terstruktur</h1>
            </div>
            <p className="text-[var(--text-secondary)] max-w-2xl">
              Implementasi lengkap data terstruktur JSON-LD menggunakan kosakata Schema.org. 
              Halaman ini menunjukkan bagaimana semua informasi profil dikodekan sebagai data semantik 
              yang dapat dibaca dan ditafsirkan dengan optimal oleh mesin pencari.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Entity list */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card sticky top-24"
            >
              <h2 className="font-semibold text-[var(--text-primary)] mb-4">Snippet JSON-LD</h2>
              <div className="space-y-1">
                {snippets.map((snippet, index) => (
                  <button
                    key={snippet.label}
                    onClick={() => setActiveSnippet(index)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      activeSnippet === index
                        ? 'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] border border-transparent'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-60">@type: </span>
                    {snippet.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main content - Code viewer */}
          <div className="lg:col-span-2 space-y-8">
            {/* Code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card !p-0 overflow-hidden"
            >
              <div className="flex items-center justify-between p-3 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] ml-2">
                    {snippets[activeSnippet].label}.jsonld
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2 py-1 rounded text-xs text-[var(--text-secondary)] hover:text-brand-500 hover:bg-brand-500/10 transition-colors cursor-pointer"
                >
                  {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
              <div className="code-block !rounded-none !border-0 max-h-96 overflow-y-auto">
                <pre className="text-[var(--text-primary)]">
                  <code>{highlightJson(snippets[activeSnippet].code)}</code>
                </pre>
              </div>
            </motion.div>

            {/* Schema.org Entity Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card !p-0 overflow-hidden"
            >
              <div className="p-4 border-b border-[var(--border-color)]">
                <h2 className="font-semibold text-[var(--text-primary)]">Entitas Schema.org yang Digunakan</h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Daftar lengkap tipe Schema.org yang diimplementasikan pada situs web ini
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Tipe</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Deskripsi</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Properti Utama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schemaEntities.map((entity, index) => (
                      <tr key={index} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-colors">
                        <td className="p-3">
                          <span className="font-mono text-brand-500 text-xs bg-brand-500/10 px-2 py-1 rounded">
                            {entity.type}
                          </span>
                        </td>
                        <td className="p-3 text-[var(--text-secondary)]">{entity.description}</td>
                        <td className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {Object.keys(entity.properties).map(prop => (
                              <span
                                key={prop}
                                className="text-xs px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] font-mono"
                              >
                                {prop}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* RDF Triple Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card !p-0 overflow-hidden"
            >
              <div className="p-4 border-b border-[var(--border-color)]">
                <h2 className="font-semibold text-[var(--text-primary)]">
                  Triple Subjek – Predikat – Objek
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Semua hubungan semantik yang dinyatakan dalam RDF triples
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Subjek</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Predikat</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)]">Objek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rdfTriples.map((triple, index) => (
                      <tr key={index} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-colors">
                        <td className="p-3">
                          <span className="text-[var(--text-primary)] font-medium">{triple.subject}</span>
                          {triple.subjectType && (
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-500 font-mono">
                              {triple.subjectType}
                            </span>
                          )}
                        </td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-accent-500 font-mono text-xs">
                            <FiArrowRight size={12} />
                            {triple.predicate}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="text-[var(--text-primary)]">{triple.object}</span>
                          {triple.objectType && (
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-accent-500/10 text-accent-500 font-mono">
                              {triple.objectType}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Validation section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card"
            >
              <h2 className="font-semibold text-[var(--text-primary)] mb-4">Validasi & Pengujian</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Anda dapat memvalidasi data terstruktur pada situs web ini menggunakan alat-alat resmi berikut:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    name: 'Uji Hasil Kaya Google (Rich Results)',
                    url: 'https://search.google.com/test/rich-results',
                    description: 'Menguji bagaimana Google merayapi dan membaca data terstruktur Anda',
                  },
                  {
                    name: 'Validator Schema.org',
                    url: 'https://validator.schema.org/',
                    description: 'Memvalidasi kesesuaian data terhadap kosakata formal Schema.org',
                  },
                  {
                    name: 'JSON-LD Playground',
                    url: 'https://json-ld.org/playground/',
                    description: 'Memvisualisasikan, merapikan, dan men-debug data berformat JSON-LD',
                  },
                  {
                    name: 'Linter Data Terstruktur',
                    url: 'http://linter.structured-data.org/',
                    description: 'Memeriksa validitas format data terstruktur dari alamat web',
                  },
                ].map(tool => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-[var(--border-color)] hover:border-brand-500/30 hover:bg-brand-500/5 transition-all group"
                  >
                    <h3 className="text-sm font-medium text-[var(--text-primary)] group-hover:text-brand-500 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{tool.description}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Simple JSON syntax highlighting for display.
 */
function highlightJson(json: string): React.ReactNode {
  const lines = json.split('\n');
  return lines.map((line, i) => {
    const highlighted = line
      .replace(/"([^"]+)":/g, '<key>' + '"$1"' + '</key>:')
      .replace(/: "([^"]+)"/g, ': <str>' + '"$1"' + '</str>')
      .replace(/: (true|false|null)/g, ': <bool>$1</bool>')
      .replace(/: (\d+)/g, ': <num>$1</num>');

    return (
      <div key={i} className="flex">
        <span className="w-8 text-right pr-3 text-[var(--text-muted)] select-none opacity-40 text-xs">
          {i + 1}
        </span>
        <span
          dangerouslySetInnerHTML={{
            __html: highlighted
              .replace(/<key>/g, '<span class="text-brand-500">')
              .replace(/<\/key>/g, '</span>')
              .replace(/<str>/g, '<span class="text-emerald-500">')
              .replace(/<\/str>/g, '</span>')
              .replace(/<bool>/g, '<span class="text-amber-500">')
              .replace(/<\/bool>/g, '</span>')
              .replace(/<num>/g, '<span class="text-cyan-500">')
              .replace(/<\/num>/g, '</span>'),
          }}
        />
      </div>
    );
  });
}
