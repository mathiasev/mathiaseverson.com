"use client"
import { useEffect } from "react";

declare const window: any;
export function AdsScript() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7773776433832805";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return '';
}