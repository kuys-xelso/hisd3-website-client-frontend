export interface Resource {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: 'Blog' | 'Case Study' | 'Whitepaper' | 'Guide';
    date: string;
    image: string;
    buttonText: string;
}

export const resourcesData: Resource[] = [
    {
        id: '1',
        slug: 'modern-his-implementation',
        title: 'Modernizing Hospital Information Systems: A 2024 Guide',
        description: 'Learn the key steps and challenges in transitioning to a modern, cloud-based HIS in today\'s healthcare landscape. We explore the strategic benefits of unified data.',
        category: 'Guide',
        date: 'Feb 15, 2024',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Download Guide'
    },
    {
        id: '2',
        slug: 'case-study-st-marys',
        title: 'St. Mary\'s Medical Center Transformation Case Study',
        description: 'How a 500-bed hospital improved patient throughput by 25% using HISD3\'s integrated clinical workflows and intelligent routing system.',
        category: 'Case Study',
        date: 'Jan 28, 2024',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Read Case Study'
    },
    {
        id: '3',
        slug: 'ai-in-diagnostics-whitepaper',
        title: 'The Impact of AI on Clinical Diagnostic Accuracy',
        description: 'An in-depth analysis of how machine learning algorithms are assisting radiologists in early detection, reducing diagnostic errors by up to 15%.',
        category: 'Whitepaper',
        date: 'Jan 12, 2024',
        image: 'https://images.unsplash.com/photo-1576091160550-217359f49fde?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Get Whitepaper'
    },
    {
        id: '4',
        slug: 'cybersecurity-healthcare-2024',
        title: 'Prioritizing Cybersecurity in Healthcare Infrastructure',
        description: 'Protecting patient data against emerging ransomware threats and ensuring HIPAA compliance with zero-trust architecture.',
        category: 'Blog',
        date: 'Feb 05, 2024',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Read Article'
    },
    {
        id: '5',
        slug: 'patient-engagement-tech',
        title: 'Digital Tools for Enhancing Patient Engagement',
        description: 'Exploring how patient portals and mobile apps are changing the doctor-patient relationship, leading to better self-care and medical adherence.',
        category: 'Blog',
        date: 'Dec 20, 2023',
        image: 'https://images.unsplash.com/photo-1576089238240-df712168337a?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Read Article'
    },
    {
        id: '6',
        slug: 'interoperability-standard-hl7',
        title: 'Understanding HL7 FHIR and Global Data Standards',
        description: 'Why interoperability is the cornerstone of a connected healthcare ecosystem and how to achieve seamless data exchange between disparate systems.',
        category: 'Whitepaper',
        date: 'Nov 15, 2023',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Get Whitepaper'
    },
    {
        id: '7',
        slug: 'telehealth-future-trends',
        title: 'The Future of Telehealth: Sustaining Momentum Post-Pandemic',
        description: 'Strategies for integrating virtual care models permanently into your healthcare delivery system for improved patient access.',
        category: 'Blog',
        date: 'Mar 10, 2024',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Read Article'
    },
    {
        id: '8',
        slug: 'revenue-cycle-management-optimization',
        title: 'Optimizing Revenue Cycle Management with Automation',
        description: 'A comprehensive guide to reducing claim denials and accelerating cash flow using AI-driven RCM solutions.',
        category: 'Guide',
        date: 'Mar 02, 2024',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Download Guide'
    },
    {
        id: '9',
        slug: 'case-study-memorial-hospital-inventory',
        title: 'Memorial Hospital: Smart Inventory Management',
        description: 'Discover how implementing IoT-based tracking reduced medical supply waste by 30% and improved equipment utilization.',
        category: 'Case Study',
        date: 'Feb 22, 2024',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        buttonText: 'Read Case Study'
    }
];
