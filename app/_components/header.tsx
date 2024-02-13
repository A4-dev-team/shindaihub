import Image from "next/image";

export default function Header() {
    return (
        <nav className="border-b-2 w-screen flex items-center px-5">
            <div className="relative aspect-square h-full">
                <Image
                    src="/A4Logo.png"
                    alt="SHINDAI HUB"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="font-bold text-2xl p-5 text-blackcustum">
                SHINDAI HUB
            </div>
        </nav>
    );
}
