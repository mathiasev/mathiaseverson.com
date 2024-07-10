import About from "@/components/layout/about";
import Blog from "@/components/layout/blog";
import Hero from "@/components/layout/hero";
import Projects from "@/components/layout/projects";
import { BlogPost, getSortedPostsData } from "@/server/posts";

export default async function Home() {
  let posts = await getSortedPostsData();
  return (
    <main>
      <Hero />
      {/* <About> */}
      {/* <Projects /> */}
      <Blog posts={posts} />
    </main>
  );
}
