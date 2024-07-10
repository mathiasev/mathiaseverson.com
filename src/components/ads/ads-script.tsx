"use client"
import { useEffect } from "react";

declare const window: any;
export function AdsScript() {

    useEffect(() => {
        const adScript = document.createElement("script");
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7773776433832805";
        adScript.async = true;
        const searchScript = document.createElement("script");
        searchScript.src = "https://cse.google.com/cse.js?cx=partner-pub-7773776433832805:9640369966";
        searchScript.async = true;

        document.body.appendChild(adScript);
        document.body.appendChild(searchScript);

        window.addEventListener("load", () => {
            const adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        });

    }, []);

    return '';
}