import { getPostById, getSortedPostsData } from "@/server/posts";
import { HomeIcon } from "@heroicons/react/20/solid";
import { getStaticPaths } from "next/dist/build/templates/pages";
import Link from "next/link";


export default async function BlogPost({ params }: { params: { blogId: string } }) {

    let post = await getPostById(params.blogId);

    return (
        <article className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 flex flex-col gap-y-12 lg:px-8 lg:pb-40">
            <nav className="flex mx-auto justify-center items-center sticky top-0 z-10 py-2 before:blur-lg before:-z-20 before:-m-5 before:bg-[#121212] before:inset-0  before:absolute" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <Link href="/" className="text-slate-400 hover:text-slate-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li >
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-slate-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a
                                href={`/blog/${params.blogId}`}
                                className="ml-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700"
                                aria-current="true"
                            >
                                {post.title}
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="bg-slate-900 p-8 sm:p-24 rounded-lg shadow-sm">
                <div className="mx-auto max-w-7xl ">
                    <div className="mx-auto  text-balance lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-6xl">{post.title}</h2>
                        <p className="mt-4 text-sm font-semibold text-slate-400">{post.date.toLocaleDateString("en-AU")}</p>
                        <p className="mt-4 text-sm md:text-lg md:leading-8 text-slate-300 dark:text-slate-400">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            <div className="prose mx-auto dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />

        </article>
    )
}


export async function generateStaticParams() {
    const posts = await getSortedPostsData();

    return posts.map((post) => ({
        blogId: post.id
    }))
}