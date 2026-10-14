import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">

            {/* Badge de statut */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible pour de nouveaux projets
            </div>

            {/* Titre principal */}
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
                Dany Lachapelle <br />
                <span className="text-gray-400">Développeur Full-Stack Web & Mobile</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base text-gray-400 sm:text-lg">
                Concepteur d'applications modernes, performantes et intuitives avec Next.js, Angular, C# (.NET) et Tailwind.
            </p>

            {/* Boutons d'action */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                    href="#projects"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
                >
                    Voir mes projets
                </a>
                <a
                    href="#contact"
                    className="rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
                >
                    Me contacter
                </a>
            </div>

            {/* Liens réseaux sociaux */}
            <div className="mt-12 flex items-center justify-center gap-6 text-gray-400">
                <a
                    href="https://github.com/DanyLac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 hover:text-white transition-colors"
                >
                    <FaGithub className="text-2xl" />
                    <span className="text-xs">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/dany-lachapelle-064468385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 hover:text-white transition-colors"
                >
                    <FaLinkedin className="text-2xl" />
                    <span className="text-xs">LinkedIn</span>
                </a>
                <a
                    href="mailto:danylac29@gmail.com"
                    className="flex flex-col items-center gap-1 hover:text-white transition-colors"
                >
                    <HiOutlineMail className="text-2xl" />
                    <span className="text-xs">Email</span>
                </a>
            </div>

        </section>
    );
}