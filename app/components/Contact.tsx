import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Me contacter</h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Un projet, une question ou une opportunité ? N'hésite pas à m'envoyer un message.
            </p>

            {/* Bouton d'e-mail direct */}
            <a
                href="mailto:danylac29@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
            >
                <HiOutlineMail className="text-xl" />
                <span>danylac29@gmail.com</span>
            </a>

            {/* Rappel rapide des réseaux si besoin */}
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