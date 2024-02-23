'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import { IoMdDownload } from "react-icons/io";

const InstallButton = () => {
    const [isInstalled, setIsInstalled] = useState<boolean>(false);
    const [isAvailable, setIsAvailable] = useState<boolean>(false);
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false); 
  
    useEffect(() => {
      const handler = (e:Event) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setIsAvailable(true)
      };
      window.addEventListener('beforeinstallprompt', handler);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler);
      };
    }, []);

    const handleButtonClick = () => {
      if (!isAvailable) {
          setShowModal(true);
      } else {
          handleInstall();
      }
    };
  
    const handleInstall = () => {
        if (deferredPrompt) {
            (deferredPrompt as any).prompt();
            (deferredPrompt as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                    setIsInstalled(true);
                } else {
                    console.log('User dismissed the install prompt');
                }
            });
            setDeferredPrompt(null)
        }
    };
  
    return (
      <button className={`bg-bluenormal text-xs sm:text-base text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center justify-center`}
        onClick={handleButtonClick}
      >
        <IoMdDownload className="text-white"/>
        <span className="xs:inline-block mx-1 text-white">{isInstalled ? 'インストール済み' : 'アプリインストール'}</span>
      </button>
    );
};

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
            <div className="font-bold text-sm sm:text-2xl p-5 text-blackcustum">
                SHINDAI HUB
            </div>
            <InstallButton />
        </nav>
    );
}
