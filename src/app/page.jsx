import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";

const Home = async () => {

  // fetch api anime
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json();

  return (
    <>
      {/* anime populer */}
      <section>
        <Header title={"Paling Populer"} linkHref={'/popular'} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Home;