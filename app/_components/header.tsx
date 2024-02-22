'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  
    useEffect(() => {
        const handler = (e:Event) => {
          e.preventDefault();
          setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
    
        return () => {
          window.removeEventListener('beforeinstallprompt', handler);
        };
      }, []);
  
    const handleInstall = () => {
        if (deferredPrompt && 'prompt' in deferredPrompt) {
            (deferredPrompt as any).prompt();
            (deferredPrompt as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                } else {
                console.log('User dismissed the install prompt');
                }
                setDeferredPrompt(null);
            });
        }
    };
  
    return (
        <button
        className="bg-gray-300 text-xs md:text-base hover:bg-blue-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center justify-center"
        onClick={handleInstall}
      >
        <svg className="fill-current w-4 h-4 mr-2 content-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
        </svg>
        <span className="hidden sm:inline-block">アプリインストール</span>
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
            <div className="font-bold text-2xl p-5 text-blackcustum">
                SHINDAI HUB
            </div>
            <InstallButton />
        </nav>
    );
}
