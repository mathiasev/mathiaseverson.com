"use client";

import { useEffect } from "react";
declare const window: any;

export default function PostContent({ content }: { content: string }) {


    useEffect(() => {
        if (document.getElementById("ad-spot")) return;
        if (!document.getElementById("content")) return;
        let children = document.getElementById("content")?.children ?? [];
        let childCount = children.length ?? 1;

        let mid = Math.floor(childCount / 2);
        if (mid > 1) {
            let adSpot = document.createElement("span")
            adSpot.id = "ad-spot";
            adSpot.innerHTML = `<ins class="adsbygoogle"
                                 style="display:block; text-align:center;margin:2rem 0;"
                                data-ad-layout="in-article"
                                data-ad-format="fluid"
                                data-ad-client="ca-pub-7773776433832805"
                                data-ad-slot="2913800613"></ins>`;
            children[mid].append(adSpot);
        }

        window.addEventListener("load", () => {
            const adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        });
    }, []);

    return (
        <div id="content" className="prose mx-auto dark:prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
    )
}