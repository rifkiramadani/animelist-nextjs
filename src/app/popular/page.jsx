"use client"
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { getAnimeReponse } from '@/libs/api-libs';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    //jika menggunakan client component server component harus dimasukkan ke dalam function
    // const fetchData = async () => {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    //     const topAnime = await response.json();
    //     setTopAnime(topAnime);
    // }

    // REUSABLE API CALL
    const fetchData = async () => {
        const popularAnime = await getAnimeReponse("top/anime", `page=${page}`);
        setTopAnime(popularAnime);
    }

    //fetch api ketika halaman pertama kali di load
    useEffect(() => {
        fetchData(); //jalankan fungsi fetchData api di atas
    }, [page]) //ketika page berubah maka akan me-fetch ulang

    return (
        <div>
            <HeaderMenu title={`HALAMAN TERPOPULER #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination
                page={page}
                setPage={setPage}
                lastPage={topAnime.pagination?.last_visible_page} />
        </div>
    )
}

export default Page;
