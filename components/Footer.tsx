import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="w-full py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4 text-xs">
                  <Link href="https://www.instagram.com/a4_shindai/" className="hover:underline">
                    運営団体
                  </Link>
                  <Link href="https://drive.google.com/file/d/1fEUcI-NQil1k-4LZ1sRw1A1X78Nivyh0/view?usp=sharing" className="hover:underline">
                    利用規約
                  </Link>
                  <Link href="https://drive.google.com/file/d/16yOmLKI4T11nIc5Hy_0IXmyj1BvHeceZ/view?usp=sharing" className="hover:underline">
                    プライバシーポリシー
                  </Link>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScPs7a2x0MidRuzM6MtQnDNupfBwtsD4I0LRj21K1UmSOjR4g/viewform" className="hover:underline">
                    お問い合わせ
                  </Link>
              </div>
          </div>
      </footer>
    );
}
