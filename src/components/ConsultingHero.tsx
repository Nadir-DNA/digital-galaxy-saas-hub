import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PopupModal } from "react-calendly";
const ConsultingHero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  return <section className="relative min-h-[90vh] flex items-center bg-brand-blue overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[120%] bg-gradient-to-b from-brand-blue to-brand-blue/90 border-l border-white/5 transform -skew-x-12 opacity-50" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10" />
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/5" />
            </div>

            <div className="container relative z-10 px-6 py-20 mx-auto">
                <div className="max-w-4xl space-y-8 animate-fade-in-up">
                    <div className="inline-block px-4 py-1 mb-4 border border-brand-gold/30 rounded-full bg-brand-blue/50 backdrop-blur-sm">
                        <span className="text-xs font-medium tracking-wider text-brand-gold uppercase">
                            Excellence & Innovation
                        </span>
                    </div>

                    <h1 className="text-5xl font-light tracking-tight text-white md:text-7xl leading-tight">
                        L'Excellence Conseil <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                            au service de votre Performance
                        </span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light text-gray-300 leading-relaxed border-l-2 border-brand-gold pl-6">Diagnostic, Audit et Benchmark par une expertise issue des parcours d'excellence du conseil IT. Sécurisez vos flux financiers et intégrez l'IA.</p>

                    <div className="flex flex-wrap gap-6 pt-8">
                        <button onClick={() => setIsCalendlyOpen(true)} className="group relative px-8 py-4 bg-brand-gold hover:bg-white text-brand-blue font-semibold transition-all duration-300 overflow-hidden inline-block cursor-pointer">
                            <span className="relative z-10 flex items-center gap-2">Réserver un Diagnostic<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>

            <PopupModal url="https://calendly.com/thedigitaldna/30min" onModalClose={() => setIsCalendlyOpen(false)} open={isCalendlyOpen} rootElement={document.getElementById("root")!} />
        </section>;
};
export default ConsultingHero;