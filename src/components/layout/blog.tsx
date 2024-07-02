import { BlogPost, getSortedPostsData } from "@/server/posts";
import Link from "next/link";

const featuredPost = {
    id: 1,
    title: 'We’re incredibly proud to announce we have secured $75m in Series B',
    href: '#',
    description:
        'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
}
const posts = [
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-16',

    },
    // More posts...
]

export default async function Blog({ posts = [] }: { posts: BlogPost[] }) {
    if (!posts.length) {
        return <div>No posts found</div>
    }
    let featuredPost = posts.shift() as BlogPost;
    let remainingPosts = posts;;
    return (
        <div className="bg-white dark:bg-slate-700 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                    <time dateTime={featuredPost.date.toISOString()} className="block text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {featuredPost.date.toLocaleDateString('en-AU')}
                    </time>

                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-300">
                        <Link href={`/blog/${featuredPost.id}`}>
                            {featuredPost.title}
                        </Link>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">{featuredPost.excerpt}</p>
                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                        <div className="flex">
                            <Link
                                href={`/blog/${featuredPost.id}`}
                                className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200"
                                aria-describedby="featured-post"
                            >
                                Continue reading <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </article>
                <div className="mx-auto w-full max-w-2xl border-t border-slate-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                    <div className="-my-12 divide-y divide-slate-900/10">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
