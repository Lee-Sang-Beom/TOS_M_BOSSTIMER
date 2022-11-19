import { ToastContainer } from "react-toastify"
import Ep01 from "./EP/episode1"
import Ep02 from "./EP/episode2"
import Ep03 from "./EP/episode3"
import Ep04 from "./EP/episode4"
import Ep05 from "./EP/episode5"
import Ep06 from "./EP/episode6"
import Ep07 from "./EP/episode7_1"
import Ep07_2 from "./EP/episode7_2"
import Ep08 from "./EP/episode8_1"
import Ep08_2 from "./EP/episode8_2"

export default function EpisodeSection() {

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <div className = "text-red-600 font-bold flex justify-center">{`2022-11-19 최신 업데이트가 있습니다. 자세한 사항은 상단의 Update 버튼을 눌러 확인해보세요!`}</div>
                <ToastContainer />
                <Ep01/>
                <Ep02/>
                <Ep03/>
                <Ep04/>
                <Ep05/>
                <Ep06/>
                <Ep07/>
                <Ep07_2/>
                <Ep08/>
                <Ep08_2/>
            </div>
        </section>
    )
} 