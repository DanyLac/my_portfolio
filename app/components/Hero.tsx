export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 text-center overflow-hidden py-32 md:py-40 w-full">
            {/* Halo lumineux de fond (Aura) pour un effet profondeur magnifique */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

            {/* Badge de statut clignotant ultra-pro */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-8 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                Disponible pour de nouvelles opportunités
            </div>

            {/* Titre percutant avec dégradé de texte */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                Dany Lachapelle <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    Développeur Full-Stack Web & Mobile
                </span>
            </h1>

            {/* Sous-titre soigné */}
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Concepteur d'applications modernes, performantes et intuitives avec Next.js, Angular, C# (.NET) et Tailwind.
            </p>

            {/* Boutons d'action avec ombres colorées et micro-animations */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                    href="#projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-xl shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                    Voir mes projets
                </a>
                <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                    Me contacter
                </a>
            </div>
        </section>
    );
}