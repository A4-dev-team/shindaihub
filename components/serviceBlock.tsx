import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { ReactElement, cloneElement } from "react";

type ServiceBlockProps = {
    serviceName: string;
    url: string;
    IconElement: ReactElement;
    textContent: string[]; // テキストコンテンツを配列として受け取る
};

// TODO: h-40?とかに固定して見た目整える
export const ServiceBlock = (props: ServiceBlockProps) => {
    const { serviceName, url, IconElement, textContent } = props;
    return (
        <Link
            href={url}
            className="flex flex-col space-y-3 p-4 group transition duration-300 hover:bg-bluenormal bg-white rounded-xl"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {cloneElement(IconElement, {
                        className:
                            "h-5 w-5 text-bluenormal transition duration-300 group-hover:text-white",
                    })}
                    <div className="font-bold text-xl transition duration-300 group-hover:text-white">
                        {serviceName}
                    </div>
                </div>
                <ArrowRightCircleIcon className="h-5 w-5 text-bluenormal transition duration-300 group-hover:text-white group-hover:translate-x-2" />
            </div>
            <div>
                {textContent.map((text, index) => {
                    return (
                        <span
                            key={index}
                            className="text-xs lg:text-base text-slate-500 transition duration-300 group-hover:text-white"
                        >
                            {text}
                        </span>
                    );
                })}
            </div>
        </Link>
    );
};

export const ServiceBlockDisabled = (props: ServiceBlockProps) => {
    const { serviceName, url, IconElement, textContent } = props;
    return (
        <Link
            href={url}
            className="flex flex-col space-y-3 p-4 bg-white rounded-xl pointer-events-none"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {cloneElement(IconElement, {
                        className: "h-5 w-5 text-bluenormal",
                    })}
                    <div className="font-bold text-xl">{serviceName}</div>
                </div>
                <ArrowRightCircleIcon className="h-5 w-5 text-bluenormal" />
            </div>
            <div>
                {textContent.map((text, index) => {
                    return (
                        <span
                            key={index}
                            className="text-xs lg:text-base text-slate-500"
                        >
                            {text}
                        </span>
                    );
                })}
            </div>
        </Link>
    );
};
