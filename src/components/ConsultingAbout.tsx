import React from 'react';

const ConsultingAbout = () => {
    return (
        <section className="bg-brand-blue py-24 relative">
            <div className="container px-6 mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-light text-white mb-8">
                    Une expertise forgée sur le terrain
                </h2>

                <div className="prose prose-lg prose-invert mx-auto">
                    <p className="text-gray-300 font-light leading-relaxed mb-12">
                        Une rigueur méthodologique acquise au sein des cabinets les plus prestigieux et éprouvée
                        auprès des leaders industriels mondiaux.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white/5 p-8 border-l-2 border-brand-gold">
                            <h3 className="text-xl font-semibold text-white mb-2">Expérience Big Four</h3>
                            <p className="text-brand-gold font-medium mb-4">Deloitte</p>
                            <p className="text-sm text-gray-400">
                                Excellence opérationnelle, audit de processus critiques et conformité.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 border-l-2 border-white/20">
                            <h3 className="text-xl font-semibold text-white mb-2">Grands Groupes</h3>
                            <p className="text-white font-medium mb-4">Airbus • CMA CGM</p>
                            <p className="text-sm text-gray-400">
                                Pilotage de projets de transformation d'envergure internationale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingAbout;
