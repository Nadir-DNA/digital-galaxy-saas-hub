import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Euro, ArrowRight } from 'lucide-react';

export const OETHCalculator = ({ children }: { children: React.ReactNode }) => {
    const [contribution, setContribution] = useState('');
    const [missionPrice, setMissionPrice] = useState('');
    const [result, setResult] = useState<{ savings: number; newContribution: number } | null>(null);

    const calculate = () => {
        const contAmount = parseFloat(contribution);
        const missionAmount = parseFloat(missionPrice);

        if (!isNaN(contAmount) && !isNaN(missionAmount)) {
            // Logic: 30% of the mission price is the potential saving
            const savings = missionAmount * 0.30;
            // The new contribution is the old contribution minus the savings
            // We ensure it doesn't go below zero, although technically it could be a credit
            const newContribution = Math.max(0, contAmount - savings);
            setResult({ savings, newContribution });
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-brand-blue border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-light">
                        <Calculator className="w-5 h-5 text-brand-gold" />
                        Simulateur d'économie OETH
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="contribution" className="text-gray-300">
                                Contribution OETH annuelle (€)
                            </Label>
                            <div className="relative">
                                <Input
                                    id="contribution"
                                    type="number"
                                    placeholder="Ex: 50000"
                                    value={contribution}
                                    onChange={(e) => setContribution(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white pl-9 focus:border-brand-gold focus:ring-brand-gold"
                                />
                                <Euro className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="mission" className="text-gray-300">
                                Prix de la mission envisagée (€)
                            </Label>
                            <div className="relative">
                                <Input
                                    id="mission"
                                    type="number"
                                    placeholder="Ex: 10000"
                                    value={missionPrice}
                                    onChange={(e) => setMissionPrice(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white pl-9 focus:border-brand-gold focus:ring-brand-gold"
                                />
                                <Euro className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={calculate}
                        className="w-full bg-brand-gold hover:bg-white text-brand-blue font-semibold transition-all"
                    >
                        Calculer mon économie
                    </Button>

                    {result && (
                        <div className="animate-fade-in-up space-y-4 pt-4 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-white/5 rounded-lg border border-brand-gold/20">
                                    <p className="text-xs text-gray-400 mb-1">Économie (30%)</p>
                                    <p className="text-xl font-bold text-brand-gold">
                                        {result.savings.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                                    </p>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                    <p className="text-xs text-gray-400 mb-1">Nouvelle Contrib.</p>
                                    <p className="text-xl font-bold text-white">
                                        {result.newContribution.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://calendly.com/dnadir23/new-meeting-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full px-4 py-2 bg-white text-brand-blue font-semibold hover:bg-gray-100 rounded-md transition-colors"
                            >
                                Discuter de cette mission
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
