import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { ReactElement, cloneElement } from "react";


export type ServiceBlockProps = {
    serviceName: string;
    url: string;
    IconElement: ReactElement;
    textContent: string[];
    isDisabled?: boolean;
};

export const ServiceBlock = (props: ServiceBlockProps) => {
    const {
        serviceName,
        url,
        IconElement,
        textContent,
        isDisabled = false,
    } = props;

    const transitionBg = "transition duration-300 hover:bg-bluenormal";
    const transitionText = "transition duration-300 group-hover:text-white";

    const linkClassName = `flex flex-col space-y-3 p-4 rounded-xl bg-white group ${
        isDisabled ? "pointer-events-none" : transitionBg
    }`;
    const iconClassName = `h-5 w-5 text-bluenormal ${
        isDisabled ? "" : transitionText
    }`;
    const serviceNameClassName = `font-bold text-xl ${
        isDisabled ? "" : transitionText
    }`;
    const textClassName = `text-xs lg:text-base text-slate-500 ${
        isDisabled ? "" : transitionText
    }`;

    return (
        <Link href={url} className={linkClassName}>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {cloneElement(IconElement, {
                        className: iconClassName,
                    })}
                    <div className={serviceNameClassName}>{serviceName}</div>
                </div>
                <ArrowRightCircleIcon
                    className={`${iconClassName} ${
                        isDisabled ? "" : "group-hover:translate-x-2"
                    }`}
                />
            </div>
            <div>
                {textContent.map((text, index) => (
                    <span key={index} className={textClassName}>
                        {text}
                    </span>
                ))}
            </div>
        </Link>
    );
};
