import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
            <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
                <Link href="/" className="text-xl font-bold">
                    DL<span className="text-blue-600">.</span>
                </Link>
                <nav className="flex gap-6 text-sm font-medium">
                    <Link href="#about" className="hover:text-blue-600 transition-colors">À propos</Link>
                    <Link href="#projects" className="hover:text-blue-600 transition-colors">Projets</Link>
                    <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
}