import Image from "next/image";
import LoginTemplate from "./LoginTemplate";
import test from "../public/img/test.jpg";

export default function Sign() {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center">
                        <h1 className="title-font font-medium text-3xl text-gray-900 text-center">{`Tree Of Savior M - BossTimer`}</h1>
                        <Image className="mt-4" src={test} width={300} height={300} alt="what?"/>
                        <p className="leading-relaxed mt-4 text-center">본 사이트는 여러분의 개인정보는 관심없으니 안심하라구 ~</p>
                        <p>{`추가] 말론님 어서와요! :)`}</p>
                    </div>
                    <LoginTemplate />   
                </div>
            </section>
        </div>
    )
}
