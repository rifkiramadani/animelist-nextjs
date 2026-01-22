import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

//untuk mendapatkan data user yang sedang login
export const authUserSession = async () => {
    const session = await getServerSession(authOption);
    return session?.user;
}
