import Link from "next/link";

import { HomeModernIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-10">
            {/* タイトル */}
            <div className="text-lg sm:text-3xl font-bold p-10 md:p-20">
                神大生のためのアプリ
            </div>
            {/* それぞれへのリンク */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
                <div className="bg-gradient-to-tl from-slate-400 to-slate-50 p-3 rounded">
                    <Link
                        href={
                            "https://a4-kobeuni-rentalhouses.glide.page/dl/d8fc49"
                        }
                    >
                        <div className="flex flex-row items-center pb-5">
                            <HomeModernIcon className="h-5 w-5 mr-2" />
                            <p className="font-bold text-xl">賃貸</p>
                        </div>
                        <p>物件の評判を掲載</p>
                        <p>住む場所を決める新入生におすすめ</p>
                    </Link>
                </div>
                <div className="bg-gradient-to-tl from-slate-400 to-slate-50 p-3 rounded">
                    <Link href={"https://s-app-xi88.glide.page/"}>
                        <div className="flex flex-row items-center pb-5">
                            <AcademicCapIcon className="h-5 w-5 mr-2" />
                            <p className="font-bold text-xl">授業</p>
                        </div>
                        <p>物件の評判を掲載</p>
                        <p>住む場所を決める新入生におすすめ</p>
                    </Link>
                </div>
                <div className="">
                    <Link href={""} className="pointer-events-none">
                        <div className="flex flex-row items-center pb-5">
                            <HomeModernIcon className="h-5 w-5 mr-2" />
                            <p className="font-bold text-xl">バイト</p>
                        </div>
                        <p>Coming soon ...</p>
                    </Link>
                </div>
                <div className="">
                    <Link href={""} className="pointer-events-none">
                        <div className="flex flex-row items-center pb-5">
                            <HomeModernIcon className="h-5 w-5 mr-2" />
                            <p className="font-bold text-xl">ご飯</p>
                        </div>
                        <p>Coming soon ...</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
