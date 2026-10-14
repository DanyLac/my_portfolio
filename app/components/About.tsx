export default function About() {
    return (
        <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">À propos de moi</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Diplômé d'un bachelier en informatique de gestion de la HELHa et fort d'une expérience de stage chez Wappli,
                je suis un développeur passionné par le web et le mobile, alliant curiosité technique et autonomie.
                Prêt à mettre mon énergie et mes compétences au service de projets concrets et innovants.
            </p>

            <h3 className="text-2xl font-semibold tracking-tight mb-6">Stack technique</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bloc Front-end */}
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">Front-end</h4>
                    <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">Angular</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">TypeScript</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">React</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">JavaScript</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">Tailwind CSS</li>
                    </ul>
                </div>

                {/* Bloc Back-end & BDD */}
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">Back-end & Base de données</h4>
                    <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">.NET Core (C#)</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">ASP.NET Core</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">MySQL</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">SQL Server</li>
                        <li className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">Git</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}