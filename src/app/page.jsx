import { getAnimeReponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {

  // fetch api anime
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json();

  // REUSABLE API CALL
  const topAnime = await getAnimeReponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // recommendedAnime = {
  //   data: recommendedAnime
  //     .sort(() => Math.random() - 0.5)
  //     .slice(0, 4)
  // }
  recommendedAnime = reproduce(recommendedAnime, 4);
  return (
    <>
      {/* anime populer */}
      <section>
        <Header title={"Paling Populer"} linkHref={'/popular'} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
      {/* rekomendasi anime */}
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page;