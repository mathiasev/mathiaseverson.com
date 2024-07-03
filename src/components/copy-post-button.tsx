"use client"
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyPostButton() {

    let [copied, setCopied] = useState(false);

    return (
        <Button
            onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); }}
            variant={"ghost"} size={"icon"}

        >
            {!copied && <CopyIcon className="h-5 w-5" />}
            {copied && <CheckIcon className="h-5 w-5 text-green-600" />}
        </Button>
    )
}