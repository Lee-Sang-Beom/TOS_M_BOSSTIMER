import Image from "next/image"
import Link from "next/link"
import ep01 from "../public/img/ep01.jpg"
import ep02 from "../public/img/ep02.jpg"
import ep03 from "../public/img/ep03.jpg"
import ep04 from "../public/img/ep04.jpg"
import ep05 from "../public/img/ep05.jpg"
import ep06 from "../public/img/ep06.jpg"
import ep07 from "../public/img/ep07.jpg"
import ep08 from "../public/img/ep08.jpg"

export default function EpisodeSection() {

    const EpisodeComponent = (epnum: any, num: number) => {
        return (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="flex flex-col justify-center items-center" href={`/episode/episode${num}`}>
                    <Image src={epnum} width={420} height={260} className="object-cover object-center block" alt="ecommerce" />
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">{`에피소드 ${num}`}</h3>
                    </div>
                </Link>
            </div>
        )
    }

    const AllEpiscodeSet = () => {
        return (
            <>
                {EpisodeComponent(ep01,1)}
                {EpisodeComponent(ep02,2)}
                {EpisodeComponent(ep03,3)}
                {EpisodeComponent(ep04,4)}
                {EpisodeComponent(ep05,5)}
                {EpisodeComponent(ep06,6)}
                {EpisodeComponent(ep07,7)}
                {EpisodeComponent(ep08,8)}
            </>
        )
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <AllEpiscodeSet />
                </div>
            </div>
        </section>
    )
} 