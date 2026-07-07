import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-emerald-50/70 md:text-lg">{description}</p>}
    </motion.div>
  );
}
