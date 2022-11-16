import { userLoginMonitoringAtom } from "../src/index"
import { useRecoilState } from 'recoil'
import Navigation from "./Nav"
import Image from "next/image"
import logo from "../public/img/tosmLogo.jpg"
import Link from "next/link"

export default function Header() {

    // 로그인 상태를 검사하기 위함 : 로그인되지 않은 상태(false)면 header를 출력하지 않음
    const [userLogin, setUserLogin] = useRecoilState(userLoginMonitoringAtom);
    
    return (
        <>
            {userLogin && <header className="text-gray-600 body-font">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href ="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                        <Image src={logo} width={100} height={100} alt="logo"/>
                    </Link>
                    <Navigation />
                </div>
            </header>}

        </>
    )
}