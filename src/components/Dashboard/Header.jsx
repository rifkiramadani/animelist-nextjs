"use client"
import { ArrowCircleLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
    const router = useRouter();

    const handleBack = (e) => {
        e.preventDefault();
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4 mt-4">
            <div onClick={handleBack} className="px-4 flex flex-row items-center gap-2 text-primary hover:text-accent transition-all cursor-pointer">
                <ArrowCircleLeftIcon size={32} />
                <span className=" font-bold text-xl">BACK</span>
            </div>
            <h3 className="text-primary text-xl px-4 font-bold">{title}</h3>
        </div>
    )
}

export default Header;