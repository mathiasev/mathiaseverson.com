import About from "@/components/layout/about";
import Blog from "@/components/layout/blog";
import Hero from "@/components/layout/hero";
import Projects from "@/components/layout/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blog />
    </main>
  );
}
