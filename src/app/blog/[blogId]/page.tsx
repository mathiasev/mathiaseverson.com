import { getPostById } from "@/server/posts";
import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


export default async function BlogPost({ params }: { params: { blogId: string } }) {

    let post = await getPostById(params.blogId);

    return (
        <article className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex flex-col gap-y-24 lg:px-8 lg:pb-40">
            <nav className="flex mx-auto justify-center items-center" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    <li>

                        <Link href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>

                    </li>
                    <li >
                        <div className="flex items-center">

                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a
                                href={`/blog/${params.blogId}`}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current="true"
                            >
                                {post.title}
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="bg-gray-900 p-16 sm:p-24 rounded-lg shadow-sm">
                <div className="mx-auto max-w-7xl ">
                    <div className="mx-auto  text-balance lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl">{post.title}</h2>
                        <p className="mt-4 text-sm font-semibold text-slate-400">{post.date.toLocaleDateString("en-AU")}</p>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            <div className="prose mx-auto dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />

        </article>
    )
}