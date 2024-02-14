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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                    <ServiceBlock
                        disabled={true}
                        serviceName="賃貸"
                        // TODO: 賃貸のURLを修正する
                        textContent={["近日公開！"]}
                    />
                    <ServiceBlock
                        serviceName="授業"
                        disabled={true}
                        textContent={["Comming Soon..."]}
                    />
                    <ServiceBlock
                        serviceName="バイト"
                        disabled={true}
                        textContent={["Comming Soon..."]}
                    />
                    <ServiceBlock
                        serviceName="ご飯"
                        disabled={true}
                        textContent={["Comming Soon..."]}
                    />
                </div>
            </div>
        </div>
    );
}
