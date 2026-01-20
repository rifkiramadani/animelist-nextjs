import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    // const { keyword } = await params; //menangkap params [keyword]
    const resolveParams = await params; //cara menangkap params kedua
    const keyword = resolveParams.keyword;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json();

    return (
        <>
            {/* anime populer */}
            <section>
                <Header title={`Hasil Pencarian Untuk ${keyword}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page;