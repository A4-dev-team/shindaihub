import { ReactElement } from "react";
import { IoHome } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { PiForkKnife } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import Header from "@/components/header";
import { ServiceBlock, ServiceBlockDisabled } from "@/components/serviceBlock";

type serviceBlockPropsListType = {
    disabled: boolean;
    serviceName: string;
    url: string;
    IconElement: ReactElement;
    textContent: string[];
};

// サービス追加する時はここに追加
const serviceBlockPropsList: serviceBlockPropsListType[] = [
    {
        disabled: false,
        serviceName: "賃貸",
        url: "callback?redirect=https://shindaihub-rentalhouse.glide.page/",
        IconElement: <IoHome />,
        textContent: [
            "神戸大学生のための賃貸情報を掲載！",
            "賃貸の口コミを確認できます！",
        ],
    },
    {
        disabled: true,
        serviceName: "授業",
        url: "#",
        IconElement: <IoIosSchool />,
        textContent: ["Comming Soon..."],
    },
    {
        disabled: true,
        serviceName: "教科書",
        url: "#",
        IconElement: <FaBook />,
        textContent: ["Comming Soon..."],
    },
    {
        disabled: true,
        serviceName: "ご飯",
        url: "#",
        IconElement: <PiForkKnife />,
        textContent: ["Comming Soon..."],
    },
];

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center bg-whitecustum">
            <Header />
            <div className="container flex flex-col w-full py-24 px-16 space-y-20">
                <div className="flex flex-col space-y-3 text-blackcustum">
                    <div className="text-3xl md:text-5xl font-bold">
                        Hack Kobe.Uni
                    </div>
                    <div className="text-sm md:text-xl">
                        神大生に最高の学生生活を届ける。
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                    {serviceBlockPropsList.map((props, index) => {
                        const {
                            disabled,
                            serviceName,
                            url,
                            IconElement,
                            textContent,
                        } = props;
                        return (
                            <div key={index}>
                                {disabled ? (
                                    <ServiceBlockDisabled
                                        serviceName={serviceName}
                                        url={url}
                                        IconElement={IconElement}
                                        textContent={textContent}
                                    />
                                ) : (
                                    <ServiceBlock
                                        serviceName={serviceName}
                                        url={url}
                                        IconElement={IconElement}
                                        textContent={textContent}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
