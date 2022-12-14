import Navigation from "./Nav"
import Image from "next/image"
import logo from "../public/img/tosmLogo.jpg"
import Link from "next/link"
import { useEffect } from "react"
import { authService as auth } from "../firebaseConfig"
import { useRecoilState } from "recoil"
import { isSignedAtom } from "../src/index";

export default function Header() {

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
                <header className="text-gray-600 body-font ">
                    <div className="mx-auto flex flex-wrap px-0 pt-6 md:px-6 flex-col md:flex-row items-center">
                        <Link href="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                            <Image src={logo} width={100} height={100} alt="logo" />
                        </Link>
                        <Navigation />
                    </div>
                </header>
            }
        </>
    )
}
