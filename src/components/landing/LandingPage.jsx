import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Droplets,
  RadioTower,
  ShieldCheck,
} from 'lucide-react';
import Navbar from './Navbar';
import SectionHeader from './SectionHeader';
import FeatureCard from './FeatureCard';
import StatCard from './StatCard';
import ContactCard from './ContactCard';
import DashboardPreview from './DashboardPreview';
import BrandLogo from './BrandLogo';
import { benefits, contactCards, features, founders, images, markets, problems, stats, steps, useCases } from '../../data/landingData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

function HeroSection() {
  const kpis = ['Up to 35% Water Saving', '24/7 Field Visibility', 'Clear Irrigation Advice', 'Multi-Zone Management'];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 image-overlay">
        <img src={images.hero} alt="Irrigated agricultural field at sunset" className="h-full w-full object-cover" fetchPriority="high" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.95fr] lg:px-8">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="hero-copy min-w-0">
          <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 backdrop-blur">
            Smart water management for modern farms
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            <span className="block">Agrio Smart</span>
            <span className="block">Irrigation for</span>
            <span className="block">Smarter Agriculture</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80 md:text-xl">
            Agrio helps farmers see field conditions clearly, reduce water waste, and plan irrigation with confidence from one simple platform.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-emerald-950 shadow-xl shadow-emerald-500/25 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              See the Solution <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              Request a Demo
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3 text-sm text-emerald-50/75 sm:flex sm:flex-wrap">
            {kpis.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center backdrop-blur">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-panel relative min-w-0">
          <DashboardPreview compact />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute -left-4 top-8 hidden rounded-2xl p-4 md:block">
            <p className="text-sm text-emerald-50/60">Water Saved</p>
            <p className="text-2xl font-black text-white">35%</p>
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="glass absolute -bottom-5 right-6 hidden rounded-2xl p-4 md:block">
            <p className="text-sm text-emerald-50/60">Irrigation</p>
            <p className="text-lg font-bold text-emerald-200">Scheduled</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <Section id="stats" className="pt-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>
    </Section>
  );
}

function ProblemSection() {
  return (
    <Section id="problem">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader align="left" eyebrow="The Challenge" title="Irrigation Decisions Are Still Too Hard to Control" description="Water, weather, and soil conditions change quickly. Agrio gives farmers a practical view of what is happening and what should be done next." />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass rounded-3xl p-5">
                <Icon className="mb-4 text-emerald-300" aria-hidden="true" />
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-50/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={images.sprinkler} alt="Sprinkler irrigation watering an agricultural field" loading="lazy" className="h-[420px] w-full object-cover md:h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-black/45 p-5 backdrop-blur-xl">
            <p className="text-sm text-emerald-100/75">Agrio helps teams reduce guesswork, protect crops, and use water at the right moment.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeader eyebrow="Solution" title="A Clear Irrigation Assistant for Daily Farm Work" description="Agrio brings field status, water use, alerts, and irrigation advice into one simple experience built for real operations." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
      </div>
    </Section>
  );
}

function DigitalTwinSection() {
  const nodes = [
    { label: 'Field Data', icon: RadioTower },
    { label: 'Connected Device', icon: Cpu },
    { label: 'Farm View', icon: ShieldCheck },
    { label: 'Zone Status', icon: Droplets },
    { label: 'Recommended Action', icon: BrainCircuit },
    { label: 'Irrigation Action', icon: Droplets },
  ];

  return (
    <Section id="farm-view">
      <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={images.field} alt="Wide agricultural field monitored by a smart irrigation platform" loading="lazy" className="h-[430px] w-full object-cover md:h-[560px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/35 to-emerald-500/20" />
          <div className="absolute left-5 right-5 top-5 grid gap-3 sm:grid-cols-2">
            {nodes.slice(0, 4).map(({ label }) => (
              <div key={label} className="rounded-2xl bg-black/45 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">{label}</div>
            ))}
          </div>
        </motion.div>
        <div>
          <SectionHeader align="left" eyebrow="Farm View" title="See Each Zone Clearly Before You Irrigate" description="The farm is organized by zone so owners and operators can quickly understand moisture, risk, and the next best action." />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {nodes.map(({ label, icon: Icon }, index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <Icon aria-hidden="true" />
                </div>
                <p className="font-semibold text-white">{label}</p>
                {index < nodes.length - 1 && <ArrowRight className="absolute right-4 top-5 hidden text-emerald-300 xl:block" size={18} aria-hidden="true" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function DashboardSection() {
  return (
    <Section id="preview">
      <SectionHeader eyebrow="Preview" title="A Simple Interface for Farm Decisions" description="A clear view of field moisture, water usage, irrigation status, and the recommended next action." />
      <DashboardPreview />
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <SectionHeader eyebrow="Process" title="How It Works" description="A simple flow from field observation to a practical irrigation decision." />
      <div className="grid gap-5 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass relative rounded-3xl p-6">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
              <Icon aria-hidden="true" />
            </div>
            <span className="absolute right-6 top-6 text-5xl font-black text-white/5">0{index + 1}</span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-emerald-50/65">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WaterManagementSection() {
  return (
    <Section id="water">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader align="left" eyebrow="Water Management" title="Use Water Where It Matters Most" description="Agrio helps reduce waste, improve irrigation timing, and support more sustainable agriculture." />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Reduce waste', 'Improve distribution', 'Save water', 'Support sustainability'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.055] p-4">
                <CheckCircle2 className="shrink-0 text-emerald-300" aria-hidden="true" />
                <span className="font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-6">
            <p className="text-3xl font-black text-white">Up to 35%</p>
            <p className="mt-2 text-emerald-50/70">potential water savings with optimized irrigation decisions.</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={images.drip} alt="Drip irrigation system delivering water near crop roots" loading="lazy" className="h-[420px] w-full object-cover md:h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      </div>
    </Section>
  );
}

function AIForecastingSection() {
  return (
    <Section id="planning">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={images.farmer} alt="Farmer reviewing smart farming conditions in an agricultural field" loading="lazy" className="h-[430px] w-full object-cover md:h-[560px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-emerald-500/20" />
        </div>
        <div>
          <SectionHeader align="left" eyebrow="Planning" title="Plan the Next Irrigation Before Stress Appears" description="Agrio estimates upcoming field needs and turns them into simple timing and duration guidance." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Next Irrigation', 'Tomorrow 06:30'],
              ['Recommendation Confidence', '92%'],
              ['Risk Level', 'Medium'],
              ['Recommended Duration', '18 min'],
            ].map(([label, value]) => (
              <div key={label} className="glass rounded-3xl p-5">
                <p className="text-sm text-emerald-50/60">{label}</p>
                <p className="mt-2 text-2xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TargetMarketSection() {
  return (
    <Section id="market">
      <SectionHeader eyebrow="Who It Helps" title="Built for Practical Agriculture" description="Agrio is suitable for open-field farms, greenhouses, cooperatives, and agricultural projects that want better water control." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {markets.map(({ title, text, image, alt }) => (
          <motion.div key={title} whileHover={{ y: -8 }} className="group relative h-80 overflow-hidden rounded-[2rem] border border-white/10">
            <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50/70">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section id="benefits">
      <SectionHeader eyebrow="Benefits" title="Why Clients Choose Agrio" description="A practical solution for water saving, better visibility, faster action, and sustainable farming." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => <FeatureCard key={benefit.title} {...benefit} description={benefit.text} />)}
      </div>
    </Section>
  );
}

function UseCasesSection() {
  return (
    <Section id="use-cases">
      <SectionHeader eyebrow="Use Cases" title="Where Agrio Fits Best" description="Common scenarios where Agrio helps farms and agriculture projects manage irrigation more clearly." />
      <div className="grid gap-5 md:grid-cols-3">
        {useCases.map((item) => (
          <div key={item.title} className="glass overflow-hidden rounded-3xl">
            <div className="relative h-48">
              <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{item.label}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-emerald-50/75">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FoundersSection() {
  return (
    <Section id="founders">
      <SectionHeader eyebrow="Team" title="Built by Said SENHADJI et LEBAILI Mohamed Ouail" description="Agrio combines field understanding with product development to make irrigation decisions easier for clients." />
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {founders.map((founder) => (
          <motion.div key={founder.name} whileHover={{ y: -8 }} className="glass overflow-hidden rounded-[2rem]">
            <div className="relative h-64">
              <img src={founder.image} alt={founder.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{founder.role}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{founder.name}</h3>
              </div>
            </div>
            <p className="p-6 leading-7 text-emerald-50/70">{founder.focus}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeader eyebrow="Contact" title="Contactez-nous" description="Vous souhaitez decouvrir Agrio ou planifier une demonstration ? Contactez-nous directement par WhatsApp ou par email." />
      <div className="grid items-stretch gap-5 lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8">
          <img src="/assets/logo/agrio-logo.png" alt="Agrio logo" loading="lazy" className="mx-auto h-52 w-52 object-contain" />
          <div className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Agrio</p>
            <p className="mt-3 text-2xl font-black text-white">Cultivez avec precision, gerez avec raison.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {contactCards.map((card) => <ContactCard key={card.title} {...card} />)}
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 md:p-14">
        <img src={images.crops} alt="Agricultural crop field with irrigation potential" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-emerald-900/40" />
        <div className="relative max-w-2xl">
          <ShieldCheck className="mb-6 text-emerald-300" size={42} aria-hidden="true" />
          <h2 className="text-3xl font-black text-white md:text-5xl">Make Irrigation Easier to Manage</h2>
          <p className="mt-5 text-lg leading-8 text-emerald-50/75">Give your farm team clear visibility, better water timing, and practical recommendations for every zone.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-emerald-400 px-7 py-4 text-center font-bold text-emerald-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Request a Demo</a>
            <a href="#features" className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Explore Benefits</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandLogo />
          <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/55">Smart irrigation platform for clearer farm decisions and better water use.</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-emerald-50/45">Founders: Said SENHADJI et LEBAILI Mohamed Ouail</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-emerald-50/65">
          <a href="#features" className="hover:text-white">Solution</a>
          <a href="#farm-view" className="hover:text-white">Farm View</a>
          <a href="#preview" className="hover:text-white">Preview</a>
          <a href="#use-cases" className="hover:text-white">Use Cases</a>
          <a href="#founders" className="hover:text-white">Founders</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-emerald-50/40">Copyright 2026 Agrio Smart Irrigation. All rights reserved.</p>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <FeaturesSection />
      <DigitalTwinSection />
      <DashboardSection />
      <HowItWorksSection />
      <WaterManagementSection />
      <AIForecastingSection />
      <TargetMarketSection />
      <BenefitsSection />
      <UseCasesSection />
      <FoundersSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
