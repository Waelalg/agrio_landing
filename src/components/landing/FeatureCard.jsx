import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, image, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className="glass group overflow-hidden rounded-3xl"
    >
      {image && (
        <div className="relative h-36 overflow-hidden">
          <img src={image} alt={alt || ''} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/25 transition group-hover:bg-emerald-400/25">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 leading-7 text-emerald-50/65">{description}</p>
      </div>
    </motion.div>
  );
}
