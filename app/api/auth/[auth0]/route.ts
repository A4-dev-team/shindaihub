import {
    handleAuth,
    handleLogin,
    AppRouteHandlerFnContext,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export const GET = handleAuth({
    login: (req: NextRequest, ctx: AppRouteHandlerFnContext) => {
        const searchParams = req.nextUrl.searchParams;
        const returnTo = searchParams.get("redirect");
        return handleLogin(req, ctx, {
            returnTo: returnTo || "/",
        });
    },
});
