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
  "Bonjour, je souhaite avoir plus d'informations sur le projet Smart Irrigation Digital Twin System."
);
const emailSubject = encodeURIComponent("Demande d'information - Smart Irrigation Digital Twin System");
const emailBody = encodeURIComponent(
  "Bonjour,\n\nJe souhaite avoir plus d'informations sur le projet Smart Irrigation Digital Twin System.\n\nMerci."
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
    focus: 'Agricultural strategy, field validation, and practical irrigation needs.',
    image: images.sprinkler,
    alt: 'Large irrigation system representing agricultural field validation',
  },
  {
    name: 'LEBAILI Mohamed Ouail',
    role: 'Co-Founder',
    focus: 'AI, IoT architecture, digital twin engineering, and platform experience.',
    image: images.smartSystem,
    alt: 'IoT smart farm interface representing digital twin engineering',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Digital Twin', href: '#digital-twin' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'AI System', href: '#ai' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Water Saving', value: '35%', icon: Droplets },
  { label: 'Real-Time Monitoring', value: '24/7', icon: Activity },
  { label: 'Active Sensors', value: '12+', icon: RadioTower },
  { label: 'AI Confidence', value: '92%', icon: BrainCircuit },
  { label: 'Efficiency Increase', value: '30%', icon: Gauge },
];

export const problems = [
  { title: 'Water Waste', text: 'Irrigation is often done without accurate soil moisture data.', icon: Waves },
  { title: 'Manual Decisions', text: 'Farmers must check conditions manually across large areas.', icon: Timer },
  { title: 'No Prediction', text: 'Traditional systems react late instead of forecasting needs.', icon: LineChart },
  { title: 'Low Visibility', text: 'Remote farms need reliable and continuous supervision.', icon: RadioTower },
];

export const features = [
  { title: 'Real-Time Monitoring', description: 'Track soil moisture, temperature, humidity, and irrigation status directly from the platform.', icon: Activity, image: images.drip, alt: 'Close view of drip irrigation in a crop row' },
  { title: 'AI Irrigation Decision', description: 'Use intelligent recommendations to decide when and how much to irrigate.', icon: BrainCircuit, image: images.smartSystem, alt: 'Smart agriculture phone interface for irrigation decisions' },
  { title: 'Digital Twin Simulation', description: 'Visualize a virtual representation of the farm and simulate irrigation behavior.', icon: Sprout, image: images.sprinkler, alt: 'Wide field irrigation system used for digital twin simulation' },
  { title: 'Predictive Analytics', description: 'Forecast future irrigation needs based on sensor data and environmental conditions.', icon: LineChart, image: images.crops, alt: 'Crop rows used for irrigation forecasting' },
  { title: 'Weather-Aware Irrigation', description: 'Adapt irrigation decisions according to climate and weather conditions.', icon: CloudSun, image: images.sprinkler, alt: 'Sprinkler irrigation affected by field weather' },
  { title: 'Water Optimization', description: 'Reduce water waste and improve resource allocation for every farm zone.', icon: Droplets, image: images.drip, alt: 'Efficient water delivery near crop roots' },
  { title: 'Smart Alerts', description: 'Receive alerts for low moisture, high temperature, or abnormal conditions.', icon: BellRing, image: images.farmer, alt: 'Farmer checking a mobile device for field alerts' },
  { title: 'Multi-Zone Management', description: 'Manage different farm zones with separate irrigation decisions.', icon: Map, image: images.smartSystem, alt: 'Connected field zones for smart irrigation management' },
];

export const steps = [
  { title: 'Sensors Collect Data', text: 'Soil moisture, temperature, humidity, and environmental data are collected from the field.', icon: RadioTower },
  { title: 'Data Sent to Platform', text: 'IoT devices transmit real-time data to the monitoring platform.', icon: Cpu },
  { title: 'AI Analyzes Conditions', text: 'The AI model analyzes field conditions and predicts irrigation needs.', icon: BrainCircuit },
  { title: 'Smart Irrigation Decision', text: 'The system recommends optimized irrigation actions for each zone.', icon: Droplets },
];

export const markets = [
  { title: 'Open-Field Farms', text: 'Monitor large agricultural fields with reliable irrigation indicators.', image: images.sprinkler, alt: 'Open agricultural field with large irrigation equipment' },
  { title: 'Greenhouses', text: 'Control moisture and climate conditions in protected environments.', image: images.drip, alt: 'Close irrigation nozzle watering crop roots' },
  { title: 'Smart Agriculture Projects', text: 'Demonstrate IoT and AI use cases for sustainable agriculture.', image: images.crops, alt: 'Agricultural crop rows for smart farming programs' },
  { title: 'Research Labs', text: 'Use real-time data to test irrigation models and digital twin scenarios.', image: images.smartSystem, alt: 'IoT smart farm interface used for irrigation research' },
];

export const benefits = [
  { title: 'Water Saving', text: 'Reduce unnecessary irrigation with data-driven decisions.', icon: Droplets, image: images.drip, alt: 'Drip irrigation conserving water in crop rows' },
  { title: 'Automation', text: 'Move from manual routines to smart recommendations.', icon: Cpu, image: images.sprinkler, alt: 'Automated sprinkler irrigation in a field' },
  { title: 'Efficiency', text: 'Improve farm productivity with better timing.', icon: Gauge, image: images.crops, alt: 'Healthy crop rows showing efficient irrigation' },
  { title: 'Remote Insights', text: 'Access farm status from anywhere.', icon: Activity, image: images.smartSystem, alt: 'Smart farm phone interface showing remote insights' },
  { title: 'Sustainable Farming', text: 'Support responsible water resource management.', icon: Leaf, image: images.farmer, alt: 'Farmer using mobile technology near water resources' },
  { title: 'Smart Alerts', text: 'React quickly to abnormal conditions.', icon: BellRing, image: images.farmer, alt: 'Farmer checking field conditions after an alert' },
];

export const useCases = [
  { title: 'Pilot Farm Monitoring', label: 'Field deployment', text: 'Follow soil moisture, irrigation status, and water usage from one dashboard.', image: images.sprinkler, alt: 'Large farm irrigation deployment' },
  { title: 'Connected Irrigation Control', label: 'IoT supervision', text: 'Connect farm zones, sensors, alerts, and mobile supervision in one workflow.', image: images.smartSystem, alt: 'Connected smart farm system with mobile interface' },
  { title: 'Root-Level Water Saving', label: 'Precision irrigation', text: 'Target water delivery near crops and reduce unnecessary irrigation cycles.', image: images.drip, alt: 'Precision drip sprinkler watering crop roots' },
];

export const contactCards = [
  {
    title: 'Discuter sur WhatsApp',
    detail: '+213 540 576 016',
    text: 'Envoyez-nous un message direct pour demander une demonstration ou plus d informations sur le systeme.',
    button: 'Envoyer un message WhatsApp',
    href: contactLinks.whatsapp,
    icon: MessageCircle,
  },
  {
    title: 'Envoyer un email',
    detail: CONTACT_EMAIL,
    text: 'Contactez-nous par email pour une presentation, une collaboration ou une demande technique.',
    button: 'Envoyer un email',
    href: contactLinks.email,
    icon: Mail,
  },
];
