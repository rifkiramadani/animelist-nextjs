"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, anime_rating }) => {

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [isCreated, setIsCreated] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleInput = (e) => {
        setComment(e.target.value)

    }

    const handleSelect = (e) => {
        setRating(e.target.value);
    }

    const handlePosting = async (e) => {
        e.preventDefault()

        // VALIDASI DULU
        if (comment.length < 3) {
            setError(true)
            return;
        }

        const data = { anime_mal_id, user_email, username, comment, anime_title, rating }
        const response = await fetch('/api/v1/comment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resultComment = await response.json();


        if (resultComment.status == 200) {
            setIsCreated(true);
            setComment("");
            setError("");
            router.refresh();
        }
    }

    return (
        <div className="flex flex-col gap-3">
            {
                error && (<span className="text-primary bg-red-500 py-5 px-4 rounded w-md">KOMENTAR HARUS LEBIH DARI 3 HURUF!!!</span>)
            }
            {
                isCreated && (<span className="text-primary bg-green-500 py-5 px-4 rounded w-md">KOMENTAR BERHASIL DI TAMBAHKAN!!!</span>)
            }
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-primary">Tambahkan Komentar</h2>
                <textarea onChange={handleInput} className="h-25 w-full bg-primary p-2 rounded" value={comment}></textarea>
                <h2 className="font-semibold text-primary">Berikan Rating</h2>
                <select onChange={handleSelect} className="text-dark bg-primary p-2">
                    <option value="1 ⭐">1 ⭐</option>
                    <option value="2 ⭐">2 ⭐</option>
                    <option value="3 ⭐">3 ⭐</option>
                    <option value="4 ⭐">4 ⭐</option>
                    <option value="5 ⭐">5 ⭐</option>
                </select>
                <button onClick={handlePosting} className="w-43 bg-accent text-dark rounded py-2 px-3 font-semibold">Posting Komentar</button>
            </div>
        </div>
    )
}

export default CommentInput;