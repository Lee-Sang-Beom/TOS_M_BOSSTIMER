import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import logo from "../public/img/tosmLogo.jpg"

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <Image src={logo} width={50} height={50} alt="logo" />
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© developer :
                    <a href="https://github.com/Lee-Sang-Beom" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Lee_Sang_Beom</a>
                </p>
            </div>
        </footer>
    )

}