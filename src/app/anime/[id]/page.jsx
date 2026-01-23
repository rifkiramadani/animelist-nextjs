import CollectionButton from "@/components/AnimeList/CollectionButton";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeReponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";


const page = async ({ params }) => {

    // const resolveParams = await params;
    // const id = resolveParams.id;

    const { id } = await params;

    const anime = await getAnimeReponse(`anime/${id}`)
    const user = await authUserSession()

    //ambil anime dan user berdasarkan anime yang di klik dan user yang sedang login 
    const collection = await prisma.collection.findFirst({
        where: {
            user_email: user?.email,
            anime_mal_id: id,
            // anime_image: anime?.data.images.jpg.image_url,
            // anime_title: anime?.data.title
        }
    })

    // console.log(anime.data.images.jpg.image_url)
    // console.log(collection);

    return (
        <>
            <div className="pt-4 px-4 mb-2 flex flex-col gap-2">
                <span className="text-primary text-2xl font-semibold">{`${anime.data.title} - ${anime.data.year}`}</span>
                {/* jika koleksi belum di tambahkan dan user sudah login maka tampilkan tombol ini */}
                {!collection && user && < CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}

            </div>
            <div className="pt-4 px-4 flex flex-row gap-3 overflow-x-auto pb-2">
                <div className="w-36 text-primary flex flex-col jusitify-center items-center outline p-2 rounded">
                    <p>PERINGKAT</p>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 text-primary flex flex-col jusitify-center items-center outline p-2 rounded">
                    <p>SKOR</p>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 text-primary flex flex-col jusitify-center items-center outline p-2 rounded">
                    <p>ANGGOTA</p>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 text-primary flex flex-col jusitify-center items-center outline p-2 rounded">
                    <p>EPISODE</p>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full object-cover rounded"
                />
                <span className="text-justify text-xl">
                    {anime.data.synopsis}
                </span>
            </div>
            <VideoPlayer youtubeId={anime.data.trailer.embed_url ?? ""} />
        </>
    )
}

export default page;