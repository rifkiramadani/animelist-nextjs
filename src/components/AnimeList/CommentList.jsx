import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { authUserSession } from "@/libs/auth-libs";

const CommentList = async ({ anime_id }) => {

    //ambil komentar berdasarkan anime yang di klik
    const comments = await prisma.comment.findMany({
        where: {
            anime_mal_id: anime_id,
        }
    })


    return (
        <div className="grid grid-cols-4 gap-4 w-full">
            {comments.map((comment, index) => (
                <div key={index} className="bg-primary py-3 px-2 rounded">
                    <p className="text-dark text-sm mb-2">{comment.comment}</p>
                    <hr />
                    <p className="text-dark mt-2 text-md">By: {comment.username}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentList;