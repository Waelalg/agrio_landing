import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.45 }}
      className="glass rounded-3xl p-5 text-center"
    >
      <Icon className="mx-auto mb-4 text-emerald-300" size={26} />
      <div className="text-3xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm text-emerald-50/60">{label}</div>
    </motion.div>
  );
}
