import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link"

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
    // const actionDashboard = user ? <Link href={"/user/dashboard"}>Dashboard</Link> : null

    return (
        <div className="flex jusitify-between items-center gap-3">
            {user ? (
                <Link href={"/user/dashboard"} >Dashboard</Link>
            ) : null}
            <Link href={actionURL} className="bg-dark text-accent px-12 py-1">
                {actionLabel}
            </Link>
        </div >
    )
}

export default UserActionButton;