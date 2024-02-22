"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackLogin() {
    const { user } = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo");

    if (user) {
        // req.queryからredirectToを読み込んで、リダイレクト
        if (redirectTo) {
            router.push(redirectTo);
        } else {
            console.log("redirectTo:", redirectTo);
        }
    } else {
        // Auth0のログインページに飛ぶ
        router.push("/api/auth/login");
    }
}
