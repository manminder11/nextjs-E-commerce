// middleware.js for clerk
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  //public pages seen to user without being logged in
  publicRoutes: ["/", "/signin(.*)", "/signup(.*)", "/sso-callback(.*)"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
