import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/80 w-full relative overflow-hidden">
            {/* Halo lumineux subtil en arrière-plan */}
            <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[75vw] mx-auto px-4 md:px-8">

                {/* En-tête de section */}
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Mon parcours</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-1">
                        À propos de moi
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Bio à gauche */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                Diplômé d'un bachelier en informatique de gestion à la <span className="font-semibold text-gray-900 dark:text-white">HELHa</span> et fort d'une expérience de stage chez <span className="font-semibold text-blue-600 dark:text-blue-400">Wappli</span>, je suis un développeur passionné par le web et le mobile.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
                                J'allie curiosité technique et autonomie pour concevoir des architectures robustes et des interfaces utilisateur soignées.
                            </p>
                        </div>
                    </div>

                    {/* Stack technique à droite */}
                    <div className="lg:col-span-7 space-y-4">

                        {/* Front-end */}
                        <div className="group p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-900/80 shadow-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                                    <FaCode className="text-lg" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                                    Front-end & Mobile
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Angular", "TypeScript", "React", "Next.js", "JavaScript", "Tailwind CSS", "Ionic"].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Back-end & Base de données */}
                        <div className="group p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-900/80 shadow-sm hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                                    <FaServer className="text-lg" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                                    Back-end & Base de données
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[".NET Core (C#)", "ASP.NET Core", "MySQL", "SQL Server", "REST APIs"].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-indigo-200 dark:group-hover:border-indigo-900 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Outillage */}
                        <div className="group p-6 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-900/80 shadow-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                                    <FaTools className="text-lg" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                                    Outils & Méthodes
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Git", "GitHub", "Bitbucket", "WebStorm", "Rider", "DataGrip", "MySQL Workbench"].map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-cyan-200 dark:group-hover:border-cyan-900 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}