"use client"

import { ArrowCircleLeftIcon, FileSearchIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const NotFound = () => {

    const router = useRouter();
    const handleBack = () => {
        router.back()
    }

    return (
        <div className="min-h-screen flex justify-center items-center gap-3 flex-col">
            <div className="flex flex-row">
                <FileSearchIcon size={44} className="text-accent" />
                <span className="text-4xl font-bold text-accent">
                    NOT FOUND
                </span>
            </div>
            <button onClick={handleBack}>
                <div className="flex flex-row items-center text-primary hover:text-accent transition-all underline">
                    <ArrowCircleLeftIcon size={32} />
                    <span>
                        Back
                    </span>
                </div>
            </button>
        </div>
    )
}

export default NotFound;