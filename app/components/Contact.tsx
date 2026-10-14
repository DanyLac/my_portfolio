import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/80 w-full relative overflow-hidden text-center"
        >
            {/* Halo lumineux subtil en arrière-plan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[90vw] xl:max-w-[85vw] 2xl:max-w-[75vw] mx-auto px-4 md:px-8">

                {/* Conteneur style carte moderne */}
                <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-8 md:p-14 shadow-xl shadow-blue-500/5 backdrop-blur-md relative overflow-hidden">

                    {/* Badge d'en-tête */}
                    <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                        Restons en contact
                    </span>

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-2 mb-4">
                        Travaillons ensemble !
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                        Un projet, une question ou une opportunité ? N'hésite pas à m'envoyer un message direct, je réponds rapidement.
                    </p>

                    {/* Bouton d'e-mail principal avec ombre portée et effet de levée */}
                    <div className="mb-12">
                        <a
                            href="mailto:danylac29@gmail.com"
                            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <HiOutlineMail className="text-2xl" />
                            <span>danylac29@gmail.com</span>
                        </a>
                    </div>

                    {/* Séparateur discret */}
                    <div className="w-1/2 mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-10" />

                    {/* Liens réseaux sociaux interactifs */}
                    <div className="flex items-center justify-center gap-6 md:gap-10">
                        <a
                            href="https://github.com/DanyLac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        >
                            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-200 shadow-sm">
                                <FaGithub className="text-2xl" />
                            </div>
                            <span className="text-xs font-semibold">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dany-lachapelle-064468385"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        >
                            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-200 shadow-sm">
                                <FaLinkedin className="text-2xl" />
                            </div>
                            <span className="text-xs font-semibold">LinkedIn</span>
                        </a>

                        <a
                            href="mailto:danylac29@gmail.com"
                            className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        >
                            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-200 shadow-sm">
                                <HiOutlineMail className="text-2xl" />
                            </div>
                            <span className="text-xs font-semibold">Email</span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}