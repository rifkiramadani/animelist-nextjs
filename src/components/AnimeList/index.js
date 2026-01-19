import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
                {api.data.map((data) => (
                    <Link key={data.mal_id} href={`/${data.mal_id}`} className="cursor-pointer">
                        <Image src={data.images.jpg.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
                        <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AnimeList;