import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
    const user = await authUserSession();

    return (
        <div className="mt-8 gap-2 flex justify-center items-center flex-col text-primary">
            <h5 className="font-bold text-xl">Welcome, {user?.name}</h5>
            <h6 className="font-semibold">Your Email is,
                <span className="underline"> {user?.email}</span>
            </h6>
            <Image src={user?.image} width={250} height={250} alt="..." />
            <div className="flex flex-wrap gap-2 py-4">
                <Link href={"/user/dashboard/collection"} className="bg-accent text-dark py-2 px-3 font-bold text-xl rounded">
                    My Collection
                </Link>
                <Link href={"/user/dashboard/comment"} className="bg-accent text-dark py-2 px-3 font-bold text-xl rounded">
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default page;