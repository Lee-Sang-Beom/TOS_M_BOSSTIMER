import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/tosmLogo.jpg"
import { useRecoilState } from "recoil"
import { isSignedAtom } from "../src/index";
import { useEffect } from "react"
import { authService as auth } from "../firebaseConfig"

export default function Footer() {

    // 로그인 여부를 확인하여, 컴포넌트 출력 여부 결정
    const [isSignedIn, setIsSignedIn] = useRecoilState(isSignedAtom);

    useEffect(() => {
        if(!isSignedIn){
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setIsSignedIn(true);
                } else {
                    setIsSignedIn(false);
                }
            });
        }
    }, []);

    return (
        <>
            {isSignedIn &&
                <footer className="text-gray-600 body-font w-full">
                    <div className="px-5 py-6 mx-auto flex items-center sm:flex-row flex-col border border-indigo-600">
                        <Link href="/home" className="flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer">
                            <Image src={logo} width={50} height={50} alt="logo" />
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">© developer :
                            <a href="https://github.com/Lee-Sang-Beom" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Lee_Sang_Beom</a>
                        </p>
                    </div>
                </footer>}
        </>
    )

}