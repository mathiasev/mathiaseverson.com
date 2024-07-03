import { CopyPostButton } from "@/components/copy-post-button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { getPostById, getSortedPostsData } from "@/server/posts";
import { HomeIcon } from "@heroicons/react/20/solid";
import { TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";


export default async function BlogPost({ params }: { params: { blogId: string } }) {

    let post = await getPostById(params.blogId);

    return (
        <article className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 flex flex-col gap-y-12 lg:px-8 lg:pb-40">
            <nav className="flex mx-auto w-full max-w-4xl justify-center items-center sticky top-0 z-10 p-2 lg:pb-4 lg:-mt-12 lg:pt-8 before:blur-lg before:-z-20 before:-m-5 lg:before:-mt-10 before:bg-[#121212] before:inset-0  before:absolute" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <Link href="/" className="text-slate-400 hover:text-slate-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-slate-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className="ml-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700">
                                        {post.title}
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <CopyPostButton />
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="bg-slate-900 p-8 sm:p-24 rounded-lg shadow-sm">
                <div className="mx-auto max-w-7xl ">
                    <div className="mx-auto  text-balance lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-6xl">{post.title}</h2>
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