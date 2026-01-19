"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {

    const searchRef = useRef();
    const router = useRouter();

    // CARA 1
    const handleSearch = (e) => {
        if(e.key === "Enter" || e.type === "click") {
            e.preventDefault();
            const keyword = searchRef.current.value;
            router.push(`/search/${keyword}`);
        }
    }

    // CARA 2
    // const handleSearch = () => {
    //     const keyword = searchRef.current.value;
    //     router.push(`/search/${keyword}`);
    // }

    // const handleSubmit = () => {
    //     handleSearch();
    // }

    // const handleKeyDown = (e) => {
    //     if(e.key === "Enter") {
    //         e.preventDefault()
    //         handleSubmit();   
    //     }
    // }

   
    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Cari Anime..."
                className="w-full bg-white p-2 rounded"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute top-2 end-1"
                onClick={handleSearch}
            >
                <MagnifyingGlassIcon
                    size={24} />
            </button>
        </div>
    )
}

export default InputSearch;