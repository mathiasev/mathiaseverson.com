"use client"
import React, { useEffect, useMemo } from "react";

declare const window: any;

export function Ad({ ...props }: { slot: string; format: string; layoutkey?: string; }): React.ReactElement {
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
            style={{ minWidth: "250px" }}
            data-ad-client="ca-pub-7773776433832805"
            data-adtest="on"
            {...props}
        ></ins>
    ) as React.ReactElement;
}