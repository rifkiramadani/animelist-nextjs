"use client"

import { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {

    const [isCreated, setIsCreated] = useState(false);

    const handleCollection = async (e) => {
        e.preventDefault();
        const data = { anime_mal_id, user_email, anime_image, anime_title }
        const response = await fetch('/api/v1/collection', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) //mengirim anime_mal_id dan user_email ke request
        })
        const collection = await response.json()
        if (collection.status == 200) {
            setIsCreated(true);
        }

    }
    return (
        <>
            {isCreated
                ?
                (<span className="text-primary bg-green-500 py-5 px-2 rounded">ANIME BERHASIL DI TAMBAHKAN KE COLLECTION</span>)
                :
                (<button onClick={handleCollection} className="px-5 py-2 bg-accent text-dark rounded font-bold w-36">+Add To Collection</button>)
            }
        </>
    )
}

export default CollectionButton;