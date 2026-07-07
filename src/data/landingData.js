import {
  Activity,
  BellRing,
  BrainCircuit,
  CloudSun,
  Cpu,
  Droplets,
  Gauge,
  Leaf,
  LineChart,
  Mail,
  Map,
  MessageCircle,
  RadioTower,
  Sprout,
  Timer,
  Waves,
} from 'lucide-react';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '213540576016';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'lebailimohamedouail@gmail.com';

const whatsappMessage = encodeURIComponent(
  "Bonjour, je souhaite avoir plus d'informations sur Agrio Smart Irrigation et planifier une demonstration."
);
const emailSubject = encodeURIComponent("Demande de demonstration - Agrio Smart Irrigation");
const emailBody = encodeURIComponent(
  "Bonjour,\n\nJe souhaite decouvrir Agrio Smart Irrigation et discuter d'une demonstration pour mon exploitation.\n\nMerci."
);

export const contactLinks = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
  email: `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`,
};

export const images = {
  hero: '/assets/images/sprinklers-mountain-field.jpg',
  field: '/assets/images/smart-irrigation-systems.jpg',
  farmer: '/assets/images/farmer-mobile-field.jpg',
  greenhouse: '/assets/images/smart-irrigation-systems.jpg',
  drip: '/assets/images/smart-irrigation.jpg',
  sprinkler: '/assets/images/center-pivot-irrigation.jpg',
  crops: '/assets/images/sprinklers-mountain-field.jpg',
  smartSystem: '/assets/images/smart-irrigation-systems.jpg',
};

export const founders = [
  {
    name: 'Said SENHADJI',
    role: 'Co-Founder',
    focus: 'Agricultural strategy, field validation, and practical farm needs.',
    image: images.sprinkler,
    alt: 'Large irrigation system representing agricultural field validation',
  },
  {
    name: 'LEBAILI Mohamed Ouail',
    role: 'Co-Founder',
    focus: 'Product development, connected field monitoring, and platform experience.',
    image: images.smartSystem,
    alt: 'Smart farm interface representing connected irrigation management',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solution', href: '#features' },
  { label: 'Farm View', href: '#farm-view' },
  { label: 'Preview', href: '#preview' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Team', href: '#founders' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Water Saving', value: '35%', icon: Droplets },
  { label: 'Daily Visibility', value: '24/7', icon: Activity },
  { label: 'Connected Zones', value: '12+', icon: RadioTower },
  { label: 'Farm Checks', value: 'Remote', icon: Timer },
  { label: 'Irrigation Timing', value: 'Per Zone', icon: Gauge },
];

export const problems = [
  { title: 'Water Waste', text: 'Irrigation is often started too early or left running too long.', icon: Waves },
  { title: 'Manual Checking', text: 'Teams spend time checking distant zones instead of acting on clear priorities.', icon: Timer },
  { title: 'Late Decisions', text: 'Problems are noticed after the crop is already under stress.', icon: LineChart },
  { title: 'Limited Visibility', text: 'Owners need a simple way to follow water, weather, and field status remotely.', icon: RadioTower },
];

export const features = [
  { title: 'Field Monitoring', description: 'Follow soil moisture, temperature, humidity, and irrigation status from one clear screen.', icon: Activity, image: images.drip, alt: 'Close view of drip irrigation in a crop row' },
  { title: 'Irrigation Advice', description: 'Know when to irrigate, for how long, and which zone needs attention first.', icon: BrainCircuit, image: images.smartSystem, alt: 'Smart agriculture phone interface for irrigation decisions' },
  { title: 'Farm Zone View', description: 'See the condition of each zone and compare needs without visiting every area.', icon: Sprout, image: images.sprinkler, alt: 'Wide field irrigation system used for farm zone supervision' },
  { title: 'Planning Ahead', description: 'Anticipate water needs before the field becomes too dry.', icon: LineChart, image: images.crops, alt: 'Crop rows used for irrigation planning' },
  { title: 'Weather-Aware Decisions', description: 'Adjust irrigation based on temperature, humidity, and upcoming weather.', icon: CloudSun, image: images.sprinkler, alt: 'Sprinkler irrigation affected by field weather' },
  { title: 'Water Control', description: 'Reduce waste and distribute water more fairly across the farm.', icon: Droplets, image: images.drip, alt: 'Efficient water delivery near crop roots' },
  { title: 'Useful Alerts', description: 'Receive clear alerts when a zone is dry, hot, or behaving abnormally.', icon: BellRing, image: images.farmer, alt: 'Farmer checking a mobile device for field alerts' },
  { title: 'Multi-Zone Management', description: 'Manage several plots or zones with separate irrigation actions.', icon: Map, image: images.smartSystem, alt: 'Connected field zones for smart irrigation management' },
];

export const steps = [
  { title: 'Field Data Is Collected', text: 'Moisture, temperature, humidity, and irrigation activity are followed in the field.', icon: RadioTower },
  { title: 'You See the Farm Clearly', text: 'The information is organized into a simple view for owners and operators.', icon: Cpu },
  { title: 'The System Highlights Needs', text: 'Dry zones, risks, and priorities are shown before they become costly problems.', icon: BrainCircuit },
  { title: 'You Irrigate with Confidence', text: 'The team receives clear guidance for each zone and can plan the next action.', icon: Droplets },
];

export const markets = [
  { title: 'Open-Field Farms', text: 'Monitor large agricultural fields with reliable irrigation indicators.', image: images.sprinkler, alt: 'Open agricultural field with large irrigation equipment' },
  { title: 'Greenhouses', text: 'Control moisture and climate conditions in protected environments.', image: images.drip, alt: 'Close irrigation nozzle watering crop roots' },
  { title: 'Cooperatives', text: 'Give growers a shared view of irrigation priorities and water use.', image: images.crops, alt: 'Agricultural crop rows for smart farming programs' },
  { title: 'Agri Projects', text: 'Show a practical, client-ready example of modern water management.', image: images.smartSystem, alt: 'Smart farm interface used for agricultural projects' },
];

export const benefits = [
  { title: 'Water Saving', text: 'Reduce unnecessary irrigation with clearer decisions.', icon: Droplets, image: images.drip, alt: 'Drip irrigation conserving water in crop rows' },
  { title: 'Less Manual Work', text: 'Spend less time checking every zone by hand.', icon: Cpu, image: images.sprinkler, alt: 'Automated sprinkler irrigation in a field' },
  { title: 'Better Timing', text: 'Irrigate before stress appears and avoid overwatering.', icon: Gauge, image: images.crops, alt: 'Healthy crop rows showing efficient irrigation' },
  { title: 'Remote Visibility', text: 'Access farm status from anywhere.', icon: Activity, image: images.smartSystem, alt: 'Smart farm phone interface showing remote insights' },
  { title: 'Sustainable Farming', text: 'Support responsible water resource management.', icon: Leaf, image: images.farmer, alt: 'Farmer using mobile technology near water resources' },
  { title: 'Fast Alerts', text: 'React quickly to dry zones or abnormal conditions.', icon: BellRing, image: images.farmer, alt: 'Farmer checking field conditions after an alert' },
];

export const useCases = [
  { title: 'Pilot Farm Monitoring', label: 'Field deployment', text: 'Follow soil moisture, irrigation status, and water usage from one view.', image: images.sprinkler, alt: 'Large farm irrigation deployment' },
  { title: 'Connected Irrigation Control', label: 'Daily operations', text: 'Coordinate farm zones, alerts, and mobile supervision in one workflow.', image: images.smartSystem, alt: 'Connected smart farm system with mobile interface' },
  { title: 'Root-Level Water Saving', label: 'Precision irrigation', text: 'Target water delivery near crops and reduce unnecessary irrigation cycles.', image: images.drip, alt: 'Precision drip sprinkler watering crop roots' },
];

export const contactCards = [
  {
    title: 'Discuter sur WhatsApp',
    detail: '+213 540 576 016',
    text: 'Envoyez-nous un message direct pour demander une demonstration ou discuter de votre exploitation.',
    button: 'Envoyer un message WhatsApp',
    href: contactLinks.whatsapp,
    icon: MessageCircle,
  },
  {
    title: 'Envoyer un email',
    detail: CONTACT_EMAIL,
    text: 'Contactez-nous par email pour une presentation, une collaboration ou une demande client.',
    button: 'Envoyer un email',
    href: contactLinks.email,
    icon: Mail,
  },
];
