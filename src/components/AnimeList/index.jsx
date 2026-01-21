import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 ">
                {/* tanda ? menandakan (jika data nya ada maka langsung render, jika belum ada kasih loading dulu) */}
                {api.data?.map((data, index) => (
                    <Link key={index} href={`/anime/${data.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all">
                        <Image src={data.images.jpg.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
                        <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AnimeList;