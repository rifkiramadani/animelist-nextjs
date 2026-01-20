import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    // const { keyword } = await params; //menangkap params [keyword]
    const resolveParams = await params; //cara menangkap params kedua
    const keyword = resolveParams.keyword;

    const decodedKeyword = decodeURI(keyword); //untuk menghilangkan spasi %20 pada hasil search

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const searchAnime = await response.json();

    return (
        <>
            {/* anime populer */}
            <section>
                <Header title={`Hasil Pencarian Untuk ${decodedKeyword}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page;