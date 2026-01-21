export { default } from "next-auth/middleware";

export const config = { matcher: ["/user/:path*"] }; //apapun url /user/... akan di protect dan diarahkan ke halaman sign in