import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Ep01 from "./EP/episode1";
import Ep02 from "./EP/episode2";
import Ep03 from "./EP/episode3";
import Ep04 from "./EP/episode4";
import Ep05 from "./EP/episode5";
import Ep06 from "./EP/episode6_1";
import Ep07 from "./EP/episode7_1";
import Ep08 from "./EP/episode8_1";
import Ep08_2 from "./EP/episode8_2";
import Ep09 from "./EP/episode9_1";
import Ep10 from "./EP/episode10_1";
import Ep10_2 from "./EP/episode10_2";
import Ep10_3 from "./EP/episode10_3";
import Ep_etc from "./EP/episode_etc";
import { authService as auth, dbService } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { userNameAtom } from "../src/index";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

export default function EpisodeSection() {

    // atom: userName
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const router = useRouter();

    async function getUserName(id:string):Promise<string>{
        const userName = await getDoc(doc(dbService, "userInfo", id));
        const returnName = userName.data()?.displayName ? userName.data()?.displayName : "guest";
        return returnName;
    }

    useEffect(() => {
        // 로그인 상태 변경에 대한 관찰
        auth.onAuthStateChanged((user) => {
            if (user) {
                // atom에 사용자 닉네임을 기록하고, 에피소드 컴포넌트 어디에서나 참조할 수 있도록 함
                getUserName(user.uid).then((name)=>{setUserName(name)});
            } else {
                // 만약 사용자의 로그인 상태가 아니라고 판단된 경우, 로그인 화면으로
                router.push("/", undefined, {shallow: true});
            }
        });
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <div className = "text-red-600 font-bold flex justify-center">
                    {`2023-01-23 최신 업데이트가 있습니다. 자세한 사항은 상단의 Update 버튼을 눌러 확인해보세요!`}
                </div>
                <ToastContainer />
                <Ep01/>
                <Ep02/>
                <Ep03/>
                <Ep04/>
                <Ep05/>
                <Ep06/>
                <Ep07/>
                <Ep08/>
                <Ep08_2/>
                <Ep09/>
                <Ep10/>
                <Ep10_2/>
                <Ep10_3/>
                <Ep_etc/>
            </div>
        </section>
    )
} 