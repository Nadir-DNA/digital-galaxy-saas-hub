import { OETHCalculator } from './OETHCalculator';
import { Percent, TrendingUp, ShieldCheck } from 'lucide-react';

const TIHSection = () => {
    return (
        <section className="bg-brand-blue py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent opacity-30" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] border border-brand-gold/20 p-8 md:p-12 rounded-lg backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-medium">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Expertise Certifiée TIH</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                                Optimisez votre budget <br />
                                <span className="font-semibold text-brand-gold">Contribution OETH</span>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Bénéficiez d'une réduction de 30 % sur votre contribution OETH en sollicitant une expertise certifiée TIH.
                                Un levier d'optimisation budgétaire direct pour financer vos projets de transformation SAP ou IA.
                            </p>

                            <div className="pt-4">
                                <OETHCalculator>
                                    <button className="px-8 py-3 bg-white text-brand-blue font-semibold hover:bg-gray-100 transition-colors">
                                        Calculer mon économie
                                    </button>
                                </OETHCalculator>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-brand-blue/50 border border-white/5 rounded-lg text-center">
                                <Percent className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                                <div className="text-3xl font-bold text-white mb-2">30%</div>
                                <div className="text-sm text-gray-400">De réduction OETH</div>
                            </div>

                            <div className="p-6 bg-brand-blue/50 border border-white/5 rounded-lg text-center">
                                <TrendingUp className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                                <div className="text-3xl font-bold text-white mb-2">ROI</div>
                                <div className="text-sm text-gray-400">Immédiat</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TIHSection;
