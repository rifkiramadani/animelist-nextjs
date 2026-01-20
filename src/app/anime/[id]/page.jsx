import { getAnimeReponse } from "@/libs/api-libs";
import Image from "next/image";


const page = async ({ params }) => {

    // const resolveParams = await params;
    // const id = resolveParams.id;

    const { id } = await params;
    const anime = await getAnimeReponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4 mb-3">
                <span className="text-primary text-2xl font-semibold">{`${anime.data.title} - ${anime.data.year}`}</span>
            </div>
            <div className="pt-4 px-4 flex flex-row gap-3 overflow-x-auto">
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
        </>
    )
}

export default page;