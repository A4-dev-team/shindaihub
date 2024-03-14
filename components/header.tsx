"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const InstallButton = () => {
    const [isInstalled, setIsInstalled] = useState<boolean>(false);
    const [isAvailable, setIsAvailable] = useState<boolean>(false);
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const url = "https://kobe-uni-hub.vercel.app/";

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsAvailable(true);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleButtonClick = () => {
        if (!isAvailable) {
            setShowModal(true);
        } else {
            handleInstall();
        }
    };

    const handleInstall = () => {
        if (deferredPrompt) {
            (deferredPrompt as any).prompt();
            (deferredPrompt as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the install prompt");
                    setIsInstalled(true);
                } else {
                    console.log("User dismissed the install prompt");
                }
            });
            setDeferredPrompt(null);
        }
    };

    return (
        <>
            <button
                className={`inline-flex items-center justify-center`}
                onClick={handleButtonClick}
            >
                <IoMdDownload />
                <span className="xs:inline-block mx-1 flex-grow">
                    {isInstalled ? "インストール済み" : "アプリインストール"}
                </span>
            </button>

            {showModal && ( // モーダルを表示する条件
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white rounded-lg w-full max-w-lg mx-3 md:mx-0 p-5">
                        <div className="flex justify-end text-xs">
                            <IoIosClose
                                onClick={() => setShowModal(false)}
                                size="2em"
                            />
                        </div>
                        <div className="mb-3">
                            <p className="text-base">【iPhoneの方】</p>
                            <ol className="list-decimal list-inside my-2">
                                <li>
                                    safariで
                                    <Link href={url} className="text-blue-600">
                                        {url}
                                    </Link>
                                    を開いて、画面下部の
                                    <IoShareOutline className="inline" />
                                    をタップ
                                </li>
                                <li>「ホーム画面に追加」をタップ</li>
                                <li>「追加」をタップし、完了</li>
                            </ol>
                            <p className="text-base mt-3">【Androidの方】</p>
                            Chromeで
                            <Link href={url} className="text-blue-600">
                                {url}
                            </Link>
                            開いて、同じようにインストールボタンを押してください
                        </div>
                        <div className="text-xs">
                            ※インストール済みの方も表示されています。その他の不具合は公式instagramからご連絡ください。
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
        setOpen(!isOpen);
    };

    const handleMenuClose = () => {
        setOpen(false);
    };

    return (
        <header className="container py-2 px-4 flex justify-between">
            <div className="flex items-center shrink-0">
                <div className="relative aspect-square h-full shrink-0">
                    <Link href="/">
                        <Image
                            src="/A4Logo.png"
                            alt="SHINDAI HUB"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </div>
                <Link href="/" className="ml-2">
                    <div className="font-bold text-xl sm:text-2xl p-5 text-blackcustum whitespace-nowrap">
                        SHINDAI HUB
                    </div>
                </Link>
            </div>
            <nav
                className={`flex items-center space-x-4 ${
                    isOpen ? "flex" : "hidden md:flex"
                }`}
            >
                <ul className="flex gap-4 mx-2">
                    <li>
                        <Link onClick={handleMenuClose} href="/recruit">
                            採用情報
                        </Link>
                    </li>
                    <li>
                        <InstallButton />
                    </li>
                </ul>
            </nav>
            <div className="flex items-center md:hidden">
                <IoIosMenu size={50} />
            </div>
        </header>
    );
}
