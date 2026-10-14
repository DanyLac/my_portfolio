export default function Project() {
    return (
        <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Mes réalisations</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Découvrez prochainement mes projets personnels et professionnels.
            </p>

            {/* Grille de cartes pour les futurs projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900/20">
                    <span className="text-sm font-semibold text-gray-400">Projet à venir</span>
                    <p className="text-xs text-gray-500 mt-1">En cours de développement</p>
                </div>

                <div className="p-8 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900/20">
                    <span className="text-sm font-semibold text-gray-400">Projet à venir</span>
                    <p className="text-xs text-gray-500 mt-1">Bientôt disponible</p>
                </div>
            </div>
        </section>
    );
}