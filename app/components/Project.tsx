import { FaCode, FaRocket, FaGithub } from "react-icons/fa";

export default function Project() {
    return (
        <section id="projects" className="py-24 w-full relative overflow-hidden">
            {/* Halo lumineux de fond */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[75vw] mx-auto px-4 md:px-8">

                {/* En-tête de section */}
                <div className="mb-12 text-center">
                    <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-1">
                        Mes Réalisations
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-base">
                        Découvrez les projets sur lesquels je travaille actuellement.
                    </p>
                </div>

                {/* Carte unique moderne "En cours de développement" */}
                <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 p-8 md:p-12 shadow-sm backdrop-blur-md text-center relative overflow-hidden group hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">

                    {/* Badge d'état */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
                        <FaRocket className="text-xs animate-bounce" />
                        Projets en préparation
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Nouveaux projets à venir bientôt
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
                        Je développe actuellement plusieurs applications web et mobiles mettant en pratique mes compétences en <span className="font-semibold text-gray-900 dark:text-white">Angular</span>, <span className="font-semibold text-gray-900 dark:text-white">Next.js</span> et <span className="font-semibold text-gray-900 dark:text-white">.NET Core</span>.
                    </p>

                    {/* Tags des technos travaillées */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                        {["Angular", ".NET Core", "Next.js", "Tailwind CSS", "REST API", "MySQL"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Lien vers GitHub */}
                    <a
                        href="https://github.com/DanyLac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <FaGithub className="text-lg" />
                        Suivre mon activité sur GitHub
                    </a>
                </div>

            </div>
        </section>
    );
}