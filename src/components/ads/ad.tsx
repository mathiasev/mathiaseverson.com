"use client"
import React, { useEffect } from "react";

declare const window: any;

export function Ad({ ...props }: { slot: string; format: string; layoutkey?: string; }): React.ReactElement {
    useEffect(() => {
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
    }, []);

    return (
        <ins className="adsbygoogle"
            data-ad-format={props.format}
            data-ad-layout-key={props.layoutkey}
            data-ad-client="ca-pub-7773776433832805"
            data-ad-slot={props.slot}
            {...props}
        ></ins>
    ) as React.ReactElement;
}