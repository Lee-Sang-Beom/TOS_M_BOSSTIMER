import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import 'semantic-ui-css/semantic.min.css'
import { Menu } from "semantic-ui-react";


export default function Navigation() {

    const router = useRouter();

    // actual movement
    function goLink(data: any): void {
        if (data.name === "home") {
            router.push("/home");
        } else if (data.name === "admin") {
            router.push("/admin");
        } else if (data.name === "help") {
            router.push("/help");
        }
    }

    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Menu inverted>
                <Menu.Item className="hover:text-gray-900" name="home" onClick={goLink} />
                <Menu.Item className="hover:text-gray-900" name="admin" onClick={goLink} />
                <Menu.Item className="hover:text-gray-900" name="help" onClick={goLink} />
            </Menu>
        </nav>
    );
}
