"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const CallbackAuth = () => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect") || "/";

    useEffect(() => {
        if (!isLoading && !user) {
            router.push(`api/auth/login?redirect=${redirect}`);
        }
    }, [user, isLoading, redirect, router]);

    if (isLoading) {
        return <div>Now Loading...</div>;
    }

    router.push(redirect);

    return null;
};

export default function CallbackPage() {
    return (
        <Suspense>
            <CallbackAuth />
        </Suspense>
    );
}
