"use client";

import { useState } from 'react';

export default function Home() {
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const handleClick = (section: string) => {
        setSelectedSection(section);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-black">
            <main className="w-full max-w-6xl p-8">
                <div className="text-center mt-16">
                    <h1 className="text-4xl font-bold text-white mb-24">Stéphen Chevalier - Web Developer</h1>
                </div>

                <div className={`flex ${selectedSection ? 'flex-col md:flex-row' : 'flex-col items-center'} gap-8 items-start`}>
                    <div className={`grid ${selectedSection ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'} gap-8 w-full md:w-${selectedSection ? '1/4' : 'full'} transition-all duration-300`}>
                        <div
                            onClick={() => handleClick('Qui suis-je ?')}
                            className={`bg-white p-6 rounded-lg border border-gray-300 flex flex-col items-center justify-center text-center cursor-pointer ${selectedSection === 'Qui suis-je ?' ? 'bg-gray-200' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-black">Qui suis-je ?</h2>
                        </div>

                        <div
                            onClick={() => handleClick('Mon parcours')}
                            className={`bg-white p-6 rounded-lg border border-gray-300 flex flex-col items-center justify-center text-center cursor-pointer ${selectedSection === 'Mon parcours' ? 'bg-gray-200' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-black">Mon parcours</h2>
                        </div>

                        <div
                            onClick={() => handleClick('Mes réalisations')}
                            className={`bg-white p-6 rounded-lg border border-gray-300 flex flex-col items-center justify-center text-center cursor-pointer ${selectedSection === 'Mes réalisations' ? 'bg-gray-200' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-black">Mes réalisations</h2>
                        </div>

                        <div
                            onClick={() => handleClick('Contactez-moi')}
                            className={`bg-white p-6 rounded-lg border border-gray-300 flex flex-col items-center justify-center text-center cursor-pointer ${selectedSection === 'Contactez-moi' ? 'bg-gray-200' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-black">Contactez-moi</h2>
                        </div>
                    </div>

                    {selectedSection && (
                        <div className="flex-grow w-full md:w-3/4 bg-white p-6 rounded-lg border border-gray-300 mt-8 md:mt-0 md:ml-8">
                            {selectedSection === 'Qui suis-je ?' && (
                                <div className="flex flex-col md:flex-row items-center md:items-start">
                                    <img src="/StephenChevalier.jpg" alt="Photo de Stéphen Chevalier" className="w-40 h-40 rounded-full md:mr-8 mb-4 md:mb-0"/>
                                    <div className="text-black">
                                        <p className="items-center">Hello moi c'est <strong>Stéphen</strong> !</p>
                                        <p className="my-4">Développeur web passionné par la création de solutions innovantes, mon objectif est de donner vie à des applications web/mobiles performantes et intuitives qui répondent à vos rêves les plus fous !</p>
                                        <p className="my-4">Blablabla</p>
                                        <p className="my-4">Blablabla</p>
                                    </div>
                                </div>
                            )}
                            {selectedSection === 'Mon parcours' && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-black">Mon parcours</h2>
                                    <p className="text-black">Blablabla</p>
                                </div>
                            )}
                            {selectedSection === 'Mes réalisations' && (
                                <div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-2 text-black">Summoners War Siege Datas</h3>
                                            <p className="text-black">Blablabla <a href="/projets/projet-1" className="text-blue-500 underline">Lire plus</a></p>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-2 text-black">BornToTravel</h3>
                                            <p className="text-black">BornToTravel <a href="/projets/projet-2" className="text-blue-500 underline">Lire plus</a></p>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-2 text-black">StockIO</h3>
                                            <p className="text-black">Blablabla <a href="/projets/projet-2" className="text-blue-500 underline">Lire plus</a></p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedSection === 'Contactez-moi' && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-black">Contactez-moi</h2>
                                    <form className="text-black">
                                        <div className="mb-4">
                                            <label className="block text-black mb-2">Nom</label>
                                            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black mb-2">Email</label>
                                            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black mb-2">Message</label>
                                            <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                                        </div>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Envoyer</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
