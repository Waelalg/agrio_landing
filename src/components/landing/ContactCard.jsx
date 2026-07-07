import { motion } from 'framer-motion';

export default function ContactCard({ icon: Icon, title, detail, text, button, href }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      href={href}
      target={href.startsWith('https') ? '_blank' : undefined}
      rel={href.startsWith('https') ? 'noreferrer' : undefined}
      aria-label={button}
      className="glass group block rounded-[2rem] p-7 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      {detail && <p className="mt-3 break-words text-lg font-black text-emerald-200">{detail}</p>}
      <p className="mt-4 min-h-16 leading-7 text-emerald-50/68">{text}</p>
      <span className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-500/20 transition group-hover:bg-emerald-300">
        {button}
      </span>
    </motion.a>
  );
}
