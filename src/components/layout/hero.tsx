import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { getLatestPost } from "@/server/posts";
import Link from "next/link";

export default async function Hero() {
    let latestPost = await getLatestPost();
    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-slate-950">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-500 light:stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <Link href={`/blog/${latestPost.id}`} className="inline-flex space-x-6 items-center">
                            <span className="rounded-full bg-slate-600/10 dark:bg-slate-300/10 px-3 py-1 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-600/10 dark:ring-slate-700/10 flex-shrink-0 items-center">
                                Latest update
                            </span>
                            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 w-full">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className=" ">{latestPost.title}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>{latestPost.date.toLocaleDateString("en-AU")}</span>
                                    </TooltipContent>
                                </Tooltip>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Link>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-400 sm:text-6xl">
                        Mathias Everson
                    </h1>
                    <p className="mt-6 md:text-lg leading-8 text-sm text-gray-500 flex flex-row gap-x-2">
                        <span>🎓</span>
                        <span>IT grad from <a className="text-gray-600 underline underline-offset-2" target="_blank" href="https://canberra.edu.au/">University of Canberra</a></span>
                    </p>
                    <p className="mt-2 md:text-lg leading-8 text-sm text-gray-500 flex flex-row gap-x-2">
                        <span>👨‍💻</span>
                        <span>Digital Team Lead at <a className="text-gray-600 underline underline-offset-2" target="_blank" href="https://threesides.com.au/">Threesides Marketing</a></span>
                    </p>
                    <p className="mt-2 md:text-lg leading-8 text-sm text-gray-500 flex flex-row gap-x-2">
                        <span>🌆</span>
                        <span><a className="text-gray-600 underline underline-offset-2" target="_blank" href="https://canberra.com.au/">Canberra</a> local</span>
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mathiaseverson/"
                            className="rounded-md flex items-center gap-x-2 bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                        >
                            <LinkedInLogoIcon className="h-4s w-4s" />
                            Meet Mathias
                        </a>
                        <a href="mailto:mathias@mathiaseverson.com" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-400">
                            Get in touch <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                priority
                                src={'/img/mathias-everson.jpg'}
                                alt="Mathias Everson"
                                width={1200}
                                height={800}
                                className="h-96 md:w-[700px] md:h-[600px] object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}