import React from 'react';

const ConsultingFooter = () => {
    return (
        <footer className="bg-brand-blue border-t border-white/5 py-12">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">THE DIGITAL DNA</h3>
                        <p className="text-sm text-gray-400">Excellence Consulting SAP & IA</p>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-brand-gold transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Confidentialité</a>
                        <a href="mailto:contact@thedigitaldna.fr" className="hover:text-brand-gold transition-colors">contact@thedigitaldna.fr</a>
                    </div>

                    <div className="text-xs text-gray-600">
                        © {new Date().getFullYear()} The Digital DNA. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ConsultingFooter;
