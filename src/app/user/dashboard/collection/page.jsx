import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const page = async () => {

    const user = await authUserSession()
    const collections = await prisma.collection.findMany({ where: { user_email: user.email } })

    return (
        <section>
            <div>
                <Header title="My Collection" />
                <div className="py-1 px-4 grid gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
                    {collections.map((collection, index) => (
                        <Link key={index} href={`/anime/${collection.anime_mal_id}`} className="relative">
                            <Image className="w-full" src={collection.anime_image} alt="..." width={350} height={350} />
                            <div className="h-16 bg-accent flex items-center justify-center font-bold absolute bottom-0 w-full">
                                <h5 className="text-dark text-center">{collection.anime_title}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page;