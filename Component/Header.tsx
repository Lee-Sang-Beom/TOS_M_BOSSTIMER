import { userLoginMonitoringAtom } from "../src/index"
import { useRecoilState } from 'recoil'
import Navigation from "./Nav";

export default function Header() {
    const [userLogin, setUserLogin] = useRecoilState(userLoginMonitoringAtom);
    console.log(userLogin);
    return (
        <header className="text-gray-600 body-font">
            <div className="mx-auto mt-4 flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <Navigation/>
            </div>
        </header>
    )
}