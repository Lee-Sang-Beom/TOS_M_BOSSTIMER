import { collection, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore"
import React, { Component, useEffect, useRef, useState } from "react"
import { Divider, Segment } from "semantic-ui-react"
import { dbService } from "../../firebaseConfig.js"
import Timer from "../Timer.jsx"
interface Props {
    areaName: string
    bossName: string
    time: string
}

export default function Ep01() {

    // 화면에 표시할 시간 설정
    const [nextDay, setNextDay] = useState("");
    const [nextHour, setNextHour] = useState("");
    const [nextMinute, setNextMinute] = useState("");
    const [nextSecond, setextSecond] = useState("");

    // episode1의 collection Name
    const q = query(collection(dbService, "episode1"));

    const [currentTime_01, setCurrentTime_01] = useState("2");
    const [currentTime_02, setCurrentTime_02] = useState("3");

    // 데이터베이스의 값 설정
    function setDBTime(newData: object) {
        return setDoc(doc(dbService, "episode1", "episode1_1"), newData, {
            merge: true,
        });
    }

    // 다음 시간 설정
    function setNextApperanceTime() {
        let date = new Date();

        // 2시간 추가
        date.setHours(date.getHours() + 2);

        // 2시간 추가했을 때의 문자열 반환
        const nextDBDay = String(date.getDate()).padStart(2, "0");
        const nextDBHour = String(date.getHours()).padStart(2, "0");
        const nextDBMinute = String(date.getMinutes()).padStart(2, "0");
        const nextDBSecond = String(date.getSeconds()).padStart(2, "0");

        setDBTime({
            nextDay: nextDBDay,
            nextHour: nextDBHour,
            nextMinute: nextDBMinute,
            nextSecond: nextDBSecond
        });

        setNextDay(nextDBDay);
        setNextHour(nextDBHour);
        setNextMinute(nextDBMinute);
        setextSecond(nextDBSecond);
    }

    // 설정된 다음 시간을 받아오는 부분
    async function getNextApperanceTime() {
        try {
            const docSnap = await getDoc(doc(dbService, "episode1", "episode1_1"));
            const timeField = docSnap.data();
            setNextDay(timeField?.nextDay);
            setNextHour(timeField?.nextHour);
            setNextMinute(timeField?.nextMinute);
            setextSecond(timeField?.nextSecond);

        } catch (error: any) {
            alert(new Error(error));
        }

    }


    // 매 첫 렌더링 때마다, 값을 받아옴
    useEffect(() => {
        getNextApperanceTime();
    }, [])


    // 매 첫 렌더링 때마다, 데이터베이스로부터 값을 얻어와 state값을 초기화함 
    useEffect(()=>{
        onSnapshot(q, (snapshot:any) => {
            const newData = snapshot.docs.map((doc:any) => ({
              ...doc.data(),
            }));

            setNextDay(newData[0].nextDay);
            setNextHour(newData[0].nextHour);
            setNextMinute(newData[0].nextMinute);
            setextSecond(newData[0].nextSecond);
          });
    },[])

    const EpContent = ({ areaName, bossName, time }: Props) => {
        return (
            <div className="p-4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                        <h2 className="text-gray-900 mb-1 text-lg font-semibold">{`- ${areaName} -`}</h2>
                        <p className="text-gray-900 mb-4 text-base">{`${bossName}`}</p>

                        <div className="border border-gray-200 p-3 rounded-lg clock_relative">
                            <div className="clock_icon">🧭</div>
                            <div className="w-full p-4 flex flex-col items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                                <p className="text-sm text-indigo-800">{`필드 이벤트 시작 시간 `}</p>
                                <p className="mt-2">{`${nextDay}일 ${nextHour}시 ${nextMinute}분`}</p>
                            </div>
                            <button className = "inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={setNextApperanceTime}>
                                갱신하기 
                            </button>                        
                        </div>

                        <Timer hour={time} min={0} sec={0} />

                    </div>
                </div>
            </div>
        )
    }


    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto text-center">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">EP01</h1>
                    <p className="lg:w-1/3 mx-auto leading-relaxed text-base">에피소드 1의 필드보스 타이머입니다.</p>
                </div>
                <Segment>
                    <div className="flex flex-wrap -m-2">
                        <EpContent areaName={`샤울레이 광장 마을`} bossName={`비겁한 붉은 부베 투사`} time={currentTime_01} />
                        <EpContent areaName={`수정 광산`} bossName={`비겁한 붉은 부베 투사`} time={currentTime_02} />
                    </div>
                </Segment>
            </div>
        </section>
    )

}