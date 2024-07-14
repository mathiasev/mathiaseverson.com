"use client"
import React, { useEffect, useMemo } from "react";

declare const window: any;

export function Ad({ ...props }: { [key: string]: string }) {
    useEffect(() => {
        try {
            const adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        } catch (e) {
            console.error("Error pushing ad to adsbygoogle", e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            data-ad-client="ca-pub-7773776433832805"
            {...props}
        ></ins>
    ) as React.ReactElement;
}