import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";


const page = () => {
    return (
        <section>
            <div>
                <Header title="My Collection" />
                <div className="py-1 px-4 grid gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
                    <Link href={'/'} className="border-2 border-accent">
                        <Image className="w-full" src="" alt="..." width={350} height={250} />
                        <div className="h-16 bg-accent flex items-center justify-center font-bold">
                            <h5 className="text-dark">Judul Anime</h5>
                        </div>
                    </Link>
                    <Link href={'/'} className="border-2 border-accent">
                        <Image className="w-full" src="" alt="..." width={350} height={250} />
                        <div className="h-16 bg-accent flex items-center justify-center font-bold">
                            <h5 className="text-dark">Judul Anime</h5>
                        </div>
                    </Link>
                    <Link href={'/'} className="border-2 border-accent">
                        <Image className="w-full" src="" alt="..." width={350} height={250} />
                        <div className="h-16 bg-accent flex items-center justify-center font-bold">
                            <h5 className="text-dark">Judul Anime</h5>
                        </div>
                    </Link>
                    <Link href={'/'} className="border-2 border-accent">
                        <Image className="w-full" src="" alt="..." width={350} height={250} />
                        <div className="h-16 bg-accent flex items-center justify-center font-bold">
                            <h5 className="text-dark">Judul Anime</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default page;