import React from 'react';
import { Building2, BrainCircuit, CheckCircle2, ArrowRight } from 'lucide-react';

const ExpertiseCard = ({
    title,
    subtitle,
    icon: Icon,
    features,
    target,
    colorClass,
    delay
}: {
    title: string;
    subtitle: string;
    icon: any;
    features: string[];
    target: string;
    colorClass: string;
    delay: string;
}) => (
    <div className={`relative flex-1 group hover:bg-white/5 transition-colors duration-500 overflow-hidden ${delay}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue/50 pointer-events-none" />

        <div className="relative z-10 p-12 h-full flex flex-col items-start border-r border-white/10 last:border-r-0">
            <div className={`p-4 rounded-lg bg-white/5 mb-8 ${colorClass}`}>
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-light text-white mb-2">{title}</h3>
            <p className="text-lg text-brand-gold mb-8">{subtitle}</p>

            <ul className="space-y-4 mb-12 flex-grow">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="font-light">{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-white/10 w-full">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Cible</p>
                <p className="text-white font-medium">{target}</p>
            </div>
        </div>
    </div>
);

const DoubleExpertise = () => {
    return (
        <section className="bg-brand-blue border-t border-white/10">
            <div className="flex flex-col md:flex-row min-h-[800px]">
                {/* Pôle A */}
                <ExpertiseCard
                    title="Expertise SAP & Finance"
                    subtitle="Sécurisation & Performance Opérationnelle"
                    icon={Building2}
                    features={[
                        "Sécurisation des flux P2P",
                        "Audits d'interfaces critiques (Ariba, Kyriba)",
                        "Benchmarks de solutions ERP",
                        "Optimisation des processus financiers"
                    ]}
                    target="DSI, Directions Trésorerie, Directions Financières"
                    colorClass="text-brand-gold"
                    delay="animate-fade-in-up"
                />

                {/* Pôle B */}
                <ExpertiseCard
                    title="Stratégie & Intégration IA"
                    subtitle="Innovation & Automatisation Intelligente"
                    icon={BrainCircuit}
                    features={[
                        "Diagnostic d'opportunités d'automatisation",
                        "Benchmarks d'outils GenIA",
                        "Déploiement d'agents intelligents",
                        "Formation et acculturation des équipes"
                    ]}
                    target="Directions Transformation, Responsables Innovation, Directions Métiers"
                    colorClass="text-white"
                    delay="animate-fade-in-up [animation-delay:200ms]"
                />
            </div>
        </section>
    );
};

export default DoubleExpertise;
