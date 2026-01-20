import Link from "next/link"
import InputSearch from "../Navbar/InputSearch"

const Navbar = () => {
    return (
        <header className="bg-accent">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4 md:items-center">
                <Link href={'/'} className="font-bold text-2xl ">
                    AnimeList
                </Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar