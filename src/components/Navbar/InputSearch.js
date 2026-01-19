"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {

    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);

    }

    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Cari Anime..."
                className="w-full bg-white p-2 rounded"
                ref={searchRef}
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