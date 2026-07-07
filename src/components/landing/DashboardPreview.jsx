import { motion } from 'framer-motion';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Activity, BrainCircuit, CalendarClock, Droplets, Gauge, Thermometer, Wifi } from 'lucide-react';

const moistureData = [
  { time: '06h', value: 32 },
  { time: '09h', value: 38 },
  { time: '12h', value: 35 },
  { time: '15h', value: 42 },
  { time: '18h', value: 58 },
  { time: '21h', value: 54 },
];

const waterData = [
  { zone: 'A', liters: 120 },
  { zone: 'B', liters: 82 },
  { zone: 'C', liters: 65 },
  { zone: 'D', liters: 95 },
];

function Metric({ icon: Icon, label, value, note }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
      <div className="mb-3 flex items-center justify-between text-emerald-200">
        <Icon size={18} />
        <span className="text-xs text-emerald-50/45">{note}</span>
      </div>
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs text-emerald-50/55">{label}</div>
    </div>
  );
}

export default function DashboardPreview({ compact = false }) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className="glass w-full min-w-0 overflow-hidden rounded-[2rem] p-4 md:p-6"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Live Farm Dashboard</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Zone A Monitoring</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300" /> Sensors online
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'}`}>
        <Metric icon={Droplets} value="42%" label="Soil Moisture" note="Live" />
        <Metric icon={Thermometer} value="28 C" label="Temperature" note="Field" />
        <Metric icon={Activity} value="61%" label="Humidity" note="Air" />
        <Metric icon={Gauge} value="120L" label="Water Usage Today" note="Total" />
        <Metric icon={CalendarClock} value="Scheduled" label="Irrigation Status" note="06:30" />
        <Metric icon={Wifi} value="12/12" label="Sensor Health" note="Online" />
      </div>

      <div className={`mt-4 grid gap-4 ${compact ? '' : 'lg:grid-cols-[1.35fr_.85fr]'}`}>
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="font-semibold text-white">Soil Moisture Forecast</h4>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Next 15h</span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moistureData}>
                <defs>
                  <linearGradient id={compact ? 'moistureCompact' : 'moisture'} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="rgba(236,253,245,.45)" fontSize={12} />
                <YAxis stroke="rgba(236,253,245,.35)" fontSize={12} />
                <Tooltip contentStyle={{ background: '#062018', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#34d399" strokeWidth={3} fill={`url(#${compact ? 'moistureCompact' : 'moisture'})`} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-400/[0.08] p-5">
            <div className="flex items-center gap-3 text-emerald-200">
              <BrainCircuit />
              <span className="font-semibold">AI Recommendation</span>
            </div>
            <p className="mt-4 text-lg font-bold text-white">Irrigate Zone A for 18 minutes</p>
            <p className="mt-2 text-sm leading-6 text-emerald-50/65">Confidence 92%. Expected soil moisture after irrigation: 58%.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h4 className="font-semibold text-white">Water Usage by Zone</h4>
              <span className="text-xs text-emerald-50/50">Liters</span>
            </div>
            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterData}>
                  <XAxis dataKey="zone" stroke="rgba(236,253,245,.45)" fontSize={12} />
                  <Tooltip contentStyle={{ background: '#062018', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
                  <Bar dataKey="liters" fill="#34d399" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
