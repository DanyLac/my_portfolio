import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Project from "@/app/components/Project";

export default function Home() {
  return (
      <main className="flex flex-col w-full">
          <Hero></Hero>
          <About></About>
          <Project></Project>
          <Contact></Contact>
      </main>
  );
}