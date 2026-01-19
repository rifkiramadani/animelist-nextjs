import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href={'/'} className="font-bold text-2xl text-white">
                    AnimeList
                </Link>
                <input type="search" placeholder="Cari Anime..." className="bg-white" />
            </div>
        </header>
    )
}

export default Navbar