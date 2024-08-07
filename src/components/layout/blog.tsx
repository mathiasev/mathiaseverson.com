import { BlogPost, getSortedPostsData } from "@/server/posts";
import Link from "next/link";


export default async function Blog({ posts = [] }: { posts: BlogPost[] }) {
    if (!posts.length) {
        return <div>No posts found</div>
    }
    let featuredPost = posts.shift() as BlogPost;
    let remainingPosts = posts;;
    return (
        <div className="bg-white dark:bg-slate-700 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg group">
                    <time dateTime={featuredPost.date.toISOString()} className="block text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {featuredPost.date.toLocaleDateString('en-AU')}
                    </time>

                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-300 group-hover:dark:text-slate-200">
                        <Link href={`/blog/${featuredPost.id}`}>
                            {featuredPost.title}
                        </Link>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">{featuredPost.excerpt}</p>
                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                        <div className="flex">
                            <Link
                                href={`/blog/${featuredPost.id}`}
                                className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-300 group-hover:dark:text-slate-200"
                                aria-describedby="featured-post"
                            >
                                Continue reading <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </article>
                <div className="mx-auto w-full max-w-2xl border-t border-slate-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                    <div className="-my-12 divide-y divide-slate-900/10 dark:divide-slate-200/10">
                        {remainingPosts.map((post) => (
                            <article key={post.id} className="py-12">
                                <div className="group relative max-w-xl">
                                    <time dateTime={post.date.toISOString()} className="block text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {post.date.toLocaleDateString('en-AU')}
                                    </time>
                                    <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-400 group-hover:text-slate-600">
                                        <Link href={`/blog/${post.id}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                        <div>
                            <ins className="adsbygoogle"
                                style={{ display: "block" }}
                                data-ad-format="fluid"
                                data-ad-layout-key="-h7-12+5a-2v-7i"
                                data-ad-client="ca-pub-7773776433832805"
                                data-ad-slot="7869053329"></ins>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
