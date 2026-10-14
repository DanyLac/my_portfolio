import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
          <Hero></Hero>
          <About></About>
      </main>
  );
}