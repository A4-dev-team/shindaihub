import Link from "next/link";

import { IoHome } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { PiForkKnife } from "react-icons/pi";
import { FaPersonDigging } from "react-icons/fa6";
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
                        disabled={false}
                        serviceName="賃貸"
                        icon={<IoHome className="h-10 w-10" />}
                        url="https://shindaihub-rentalhouse.glide.page/"
                        textContent={[
                            "神戸大学生のための賃貸情報を掲載！",
                            "賃貸の口コミを確認できます！",
                        ]}
                    />
                    <ServiceBlock
                        disabled={true}
                        serviceName="授業"
                        icon={<IoIosSchool className="h-10 w-10" />}
                        url=""
                        textContent={["Comming Soon..."]}
                    />
                    <ServiceBlock
                        disabled={true}
                        serviceName="バイト"
                        icon={<FaPersonDigging className="h-10 w-10" />}
                        url=""
                        textContent={["Comming Soon..."]}
                    />
                    <ServiceBlock
                        disabled={true}
                        serviceName="ご飯"
                        icon={<PiForkKnife className="h-10 w-10" />}
                        url=""
                        textContent={["Comming Soon..."]}
                    />
                </div>
            </div>
        </div>
    );
}
