import { IoHome } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPuzzlePiece } from 'react-icons/fa';
import { BiSolidBowlRice } from "react-icons/bi";
import { ServiceBlock, ServiceBlockProps } from "@/components/serviceBlock";
import Link from "next/link";
import Information from "@/components/Information";
import Footer from "@/components/Footer";

// サービス追加する時はここに追加
const serviceBlockPropsList: ServiceBlockProps[] = [
    {
        serviceName: "えーごはん",
        url: "https://shindaihub-meal.vercel.app/restaurants",
        IconElement: <BiSolidBowlRice />,
        textContent: [
            "神大生のための六甲周辺の飲食店を20軒以上掲載！",
            "あなたにピッタリなお店を見つけられます！",
        ],
    },
    {
        serviceName: "賃貸",
        url: "callback?redirect=https://shindaihub-rentalhouse.glide.page/",
        IconElement: <IoHome />,
        textContent: [
            "神大生のための賃貸情報を掲載！",
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
        serviceName: "六甲祭謎解きアプリ",
        url: "https://a4-rokkousai-app.vercel.app/",
        IconElement:<FaPuzzlePiece/>,
        textContent: [
            "SHINDAIHUBを取り戻せ！",
        ],
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
            <div>
                <Information 
                    title="10/6「えーごはん」リリースいたしました！" 
                    message=""
                    url="https://drive.google.com/file/d/1Nk9xC13G3sN84-QIFRWVvoOdyB_5y4VZ/view?usp=sharing" 
                />
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
            <Footer />
        </div>
    );
}
