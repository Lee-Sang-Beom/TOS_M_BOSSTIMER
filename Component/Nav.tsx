import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import 'semantic-ui-css/semantic.min.css'
import { Label, Menu } from "semantic-ui-react";
import { authService as auth } from "../firebaseConfig";


export default function Navigation() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState("home");

    // router를 사용한 이동 부분
    function goLink(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any): void {
        setActiveItem(data.name);
        if (data.name === "home") {
            router.push("/home");
        } else if (data.name === "admin") {
            router.push("/admin");
        } else if (data.name === "update") {
            router.push("/update");
        }
    }  

    // 로그아웃 버튼 클릭
    const onLogOutClick = () => {
      auth.signOut();
      router.replace("/");
    };


    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Menu pointing secondary> 
                <Menu.Item className="hover:text-gray-900" name="home" active={activeItem === 'home'} onClick={goLink} />
                <Menu.Item className="hover:text-gray-900" name="admin" active={activeItem === 'admin'} onClick={goLink} />
                <Menu.Item className="hover:text-gray-900" name="update" active={activeItem === 'update'} onClick={goLink}/>
                <div className="hidden md:block"><Menu.Item></Menu.Item></div>
                <Menu.Menu position="right">
                    <Menu.Item className="hover:text-gray-900" name="로그아웃" onClick={onLogOutClick} />
                </Menu.Menu>
            </Menu>
        </nav>
    );
}
