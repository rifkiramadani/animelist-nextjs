import AnimeList from "../components/AnimeList";
import Link from "next/link";

const Home = async () => {

  // fetch api anime
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href={'/popular'} className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
        {anime.data.map((data) => (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList id={data.mal_id} title={data.title} images={data.images.webp.image_url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;