import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { StarIcon } from "@phosphor-icons/react";

const Page = async () => {

    const user = authUserSession();
    const comments = await prisma.comment.findMany({
        where: {
            user_email: user.email
        }
    })
    return (
        <>
            <Header title={"My Comments"} />
            <div className="grid grid-cols-5 p-4 mt-2 gap-3" >
                {comments.map((comment, index) => (
                    <Link href={`/anime/${comment.anime_mal_id}`} key={index} className="flex flex-col w-auto bg-accent text-dark rounded p-4 hover:scale-102 transition-all">
                        <p className="text-xl font-semibold">{comment.anime_title}</p>
                        <p className="text-sm font-semibold">{comment.rating}</p>
                        <p className="text-md font-extralight italic">{comment.comment}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Page;