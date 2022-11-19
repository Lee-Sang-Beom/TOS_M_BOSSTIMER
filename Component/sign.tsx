import LoginTemplate from "./LoginTemplate"
import Animation from "./animation.jsx";
import 'animate.css';

export default function Sign() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center">
                        <h1 className="animate__animated animate__fadeInDown mb-3">모두가 함께 만들어나가는 시간</h1>
                        <h1 className="title-font font-bold text-3xl text-gray-900 text-center animate__animated animate__fadeInDownBig">{`Tree Of Savior M`}</h1>
                        <h3 className="title-font font-bold text-base animate__animated animate__flipInX"> BossTimer </h3>
                        <Animation/>
                    </div>
                    <LoginTemplate />   
                </div>
            </section>
        </div>
    )
}
