import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiDatabase, FiSearch, FiLayers, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { semanticConcepts, rdfTriples } from '../../data/semantic';

const conceptIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  globe: FiGlobe,
  data: FiDatabase,
  schema: FiLayers,
  search: FiSearch,
};

// Visual graph nodes for the semantic relationship visualization
const graphNodes = [
  { id: 'jeremy', label: 'Jeremy R. Latuperisa', x: 50, y: 50, type: 'Orang', color: '#6366f1' },
  { id: 'uho', label: 'Universitas Halu Oleo', x: 85, y: 20, type: 'Universitas', color: '#06b6d4' },
  { id: 'python', label: 'Python', x: 15, y: 20, type: 'Keahlian', color: '#10b981' },
  { id: 'diskominfo', label: 'Diskominfo', x: 85, y: 80, type: 'Organisasi', color: '#f59e0b' },
  { id: 'router', label: 'Smart Router', x: 15, y: 80, type: 'Proyek', color: '#ef4444' },
  { id: 'react', label: 'React', x: 10, y: 50, type: 'Keahlian', color: '#10b981' },
  { id: 'gdsc', label: 'GDSC UHO', x: 90, y: 50, type: 'Organisasi', color: '#f59e0b' },
];

const graphEdges = [
  { from: 'jeremy', to: 'uho', label: 'studiesAt' },
  { from: 'jeremy', to: 'python', label: 'hasSkill' },
  { from: 'jeremy', to: 'diskominfo', label: 'workedAt' },
  { from: 'jeremy', to: 'router', label: 'created' },
  { from: 'jeremy', to: 'react', label: 'hasSkill' },
  { from: 'jeremy', to: 'gdsc', label: 'memberOf' },
];

export default function SemanticDemo() {
  const [selectedTriple, setSelectedTriple] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'concepts' | 'graph' | 'triples'>('concepts');

  return (
    <section id="semantic" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <SectionHeading
          title="Web Semantik"
          subtitle="Memahami bagaimana mesin menafsirkan data situs web ini"
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-1">
            {[
              { key: 'concepts', label: 'Konsep Dasar' },
              { key: 'graph', label: 'Grafik Pengetahuan' },
              { key: 'triples', label: 'RDF Triples' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'concepts' | 'graph' | 'triples')}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Concepts Tab */}
        {activeTab === 'concepts' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {semanticConcepts.map((concept, index) => {
              const Icon = conceptIcons[concept.icon] || FiGlobe;
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-500 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">
                        {concept.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {concept.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Knowledge Graph Tab */}
        {activeTab === 'graph' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card !p-0 overflow-hidden">
              <div className="p-4 border-b border-[var(--border-color)]">
                <h3 className="font-semibold text-[var(--text-primary)]">Grafik Hubungan Semantik</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Representasi visual dari hubungan antara entitas-entitas data pada situs web ini
                </p>
              </div>
              <div className="p-4 sm:p-8">
                {/* SVG Knowledge Graph */}
                <svg viewBox="0 0 100 100" className="w-full max-w-2xl mx-auto" style={{ height: '400px' }}>
                  {/* Edges */}
                  {graphEdges.map((edge, i) => {
                    const from = graphNodes.find(n => n.id === edge.from)!;
                    const to = graphNodes.find(n => n.id === edge.to)!;
                    const midX = (from.x + to.x) / 2;
                    const midY = (from.y + to.y) / 2;
                    return (
                      <g key={i}>
                        <motion.line
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 1, delay: i * 0.15 }}
                          x1={from.x}
                          y1={from.y}
                          x2={to.x}
                          y2={to.y}
                          stroke="currentColor"
                          strokeWidth="0.2"
                          className="text-brand-500 semantic-edge"
                        />
                        <text
                          x={midX}
                          y={midY - 1}
                          textAnchor="middle"
                          className="fill-[var(--text-muted)]"
                          fontSize="2"
                          fontFamily="var(--font-mono)"
                        >
                          {edge.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  {graphNodes.map((node, i) => (
                    <motion.g
                      key={node.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="semantic-node cursor-pointer"
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.id === 'jeremy' ? 4 : 2.5}
                        fill={node.color}
                        opacity={0.9}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.id === 'jeremy' ? 5 : 3.5}
                        fill="none"
                        stroke={node.color}
                        strokeWidth="0.15"
                        opacity={0.3}
                      />
                      <text
                        x={node.x}
                        y={node.y + (node.id === 'jeremy' ? 7 : 5)}
                        textAnchor="middle"
                        className="fill-[var(--text-primary)]"
                        fontSize="2.2"
                        fontWeight={node.id === 'jeremy' ? 'bold' : 'normal'}
                      >
                        {node.label}
                      </text>
                      <text
                        x={node.x}
                        y={node.y + (node.id === 'jeremy' ? 9.5 : 7.5)}
                        textAnchor="middle"
                        fill={node.color}
                        fontSize="1.6"
                        fontFamily="var(--font-mono)"
                      >
                        {node.type}
                      </text>
                    </motion.g>
                  ))}
                </svg>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {[
                    { color: '#6366f1', label: 'Orang (Person)' },
                    { color: '#06b6d4', label: 'Universitas' },
                    { color: '#10b981', label: 'Keahlian' },
                    { color: '#f59e0b', label: 'Organisasi' },
                    { color: '#ef4444', label: 'Proyek' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-[var(--text-secondary)]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* RDF Triples Tab */}
        {activeTab === 'triples' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card !p-0 overflow-hidden">
              <div className="p-4 border-b border-[var(--border-color)]">
                <h3 className="font-semibold text-[var(--text-primary)]">
                  RDF Triples (Subjek → Predikat → Objek)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Unit dasar representasi data dalam teknologi Web Semantik
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
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        onClick={() => setSelectedTriple(selectedTriple === index ? null : index)}
                        className={`border-b border-[var(--border-color)] cursor-pointer transition-colors ${
                          selectedTriple === index
                            ? 'bg-brand-500/5'
                            : 'hover:bg-[var(--bg-secondary)]'
                        }`}
                      >
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-[var(--text-primary)] font-medium">{triple.subject}</span>
                            {triple.subjectType && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-500 font-mono">
                                {triple.subjectType}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-accent-500 font-mono text-xs">
                            <FiArrowRight size={12} />
                            {triple.predicate}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-[var(--text-primary)]">{triple.object}</span>
                            {triple.objectType && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-500/10 text-accent-500 font-mono">
                                {triple.objectType}
                              </span>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
