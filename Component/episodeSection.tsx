import Ep01 from "./EP/episode1"
import Ep02 from "./EP/episode2"

export default function EpisodeSection() {

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <Ep01/>
                <Ep02/>
            </div>
        </section>
    )
} 