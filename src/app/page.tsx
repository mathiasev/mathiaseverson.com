import About from "@/components/layout/about";
import Blog from "@/components/layout/blog";
import Hero from "@/components/layout/hero";
import Projects from "@/components/layout/projects";
import { BlogPost, getSortedPostsData } from "@/server/posts";

export default function Home() {
  let posts = getSortedPostsData();
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blog posts={posts} />
    </main>
  );
}
