import Link from "next/link";

import { HomeIcon } from "@heroicons/react/24/solid";
import Header from "./_components/header";
import ServiceBlock from "./_components/serviceBlock";

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center bg-whitecustum">
            <Header />
            <div className="flex flex-col w-2/3 h-1/4 md:h-1/3 justify-center text-blackcustum">
                <div className="text-3xl md:text-5xl font-bold pb-3">
                    Hack Kobe.Uni
                </div>
                <div className="text-sm md:text-xl">
                    神大生に最高の学生生活を届ける。
                </div>
            </div>
            <div className="flex flex-col items-center justify-center px-10">
                {/* タイトル */}

                {/* それぞれへのリンク */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
                    <ServiceBlock
                        serviceName="賃貸"
                        // TODO: 賃貸のURLを修正する
                        url={"https://shindaihub-rentalhouse.glide.page/"}
                        icon={
                            <HomeIcon className="h-5 w-5 mr-2 text-bluenormal" />
                        }
                        textContent={[
                            "物件の情報や口コミを掲載",
                            "住む場所を決める新入生におすすめ",
                        ]}
                    />
                    <ServiceBlock serviceName="授業" disabled={true} />
                    <ServiceBlock serviceName="バイト" disabled={true} />
                    <ServiceBlock serviceName="ご飯" disabled={true} />
                </div>
            </div>
        </div>
    );
}
