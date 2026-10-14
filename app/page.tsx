import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
          <Hero></Hero>
          <About></About>
          <Contact></Contact>
      </main>
  );
}