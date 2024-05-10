import { IoHome } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { PiForkKnife } from "react-icons/pi";
import { FaBook, FaMapMarkedAlt } from "react-icons/fa";
import { ServiceBlock, ServiceBlockProps } from "@/components/serviceBlock";
import Link from "next/link";

// サービス追加する時はここに追加
const serviceBlockPropsList: ServiceBlockProps[] = [
    {
        serviceName: "賃貸",
        url: "callback?redirect=https://shindaihub-rentalhouse.glide.page/",
        IconElement: <IoHome />,
        textContent: [
            "神戸大学生のための賃貸情報を掲載！",
            "実際に住んでいる先輩の口コミを確認できます！",
        ],
    },
    {
        serviceName: "授業",
        url: "callback?redirect=https://shindaihub-class.glide.page",
        IconElement: <IoIosSchool />,
        textContent: [
            "神大生のための授業情報を掲載！",
            "授業の評価や感想を確認できます！",
        ],
    },
    {
        serviceName: "学内マップ",
        url: "/campus-map",
        IconElement: <FaMapMarkedAlt />,
        textContent: [
            "神戸大学のキャンパスマップを掲載！",
            "建物名前で検索し、Google Mapで確認できます！",
        ],
    },
    {
        serviceName: "教科書",
        url: "#",
        IconElement: <FaBook />,
        textContent: ["Coming Soon..."],
        isDisabled: true,
    },
    {
        serviceName: "ご飯",
        url: "#",
        IconElement: <PiForkKnife />,
        textContent: ["Coming Soon..."],
        isDisabled: true,
    },
];

export default function Home() {
    return (
        <div className="container flex flex-col w-full py-8 px-8 space-y-8">
            <div className="flex flex-col space-y-2 text-blackcustum">
                <div className="text-3xl md:text-4xl font-bold">
                    Hack Kobe.Uni
                </div>
                <div className="text-sm md:text-xl">
                    神大生に最高の学生生活を届ける。
                </div>
            </div>
            <div className="text-sm md:text-xl">
                絶賛、ご飯プロダクトを開発中！<br />
                A4は年中メンバーを募集しています。<br />
                もし、興味のある方は<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdd8pRWg--WICAUeBqDEEZuk0dW2hzOXVU12B09JjCJgNfKrw/viewform?usp=sf_link" className="text-bluenormal font-bold">こちら</Link>のフォームよりご応募ください。
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                {serviceBlockPropsList.map((props, index) => {
                    const {
                        serviceName,
                        url,
                        IconElement,
                        textContent,
                        isDisabled,
                    } = props;
                    return (
                        <ServiceBlock
                            key={index}
                            serviceName={serviceName}
                            url={url}
                            IconElement={IconElement}
                            textContent={textContent}
                            isDisabled={isDisabled}
                        />
                    );
                })}
            </div>
        </div>
    );
}
