import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const page = async () => {
    const user = await authUserSession();

    return (
        <div className="text-primary">
            <h3>DASHBOARD</h3>
            <Image src={user.image} width={250} height={250} alt="..." />
            <h5>Welcome, {user.name}</h5>
            <h6>Your Email is, {user.email}</h6>
        </div>
    )
}

export default page;