import { collection, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore"
import React, { Component, useEffect, useRef, useState } from "react"
import { Divider, Segment } from "semantic-ui-react"
import { dbService } from "../../firebaseConfig.js"
import Timer from "../Timer.jsx"
import { ep01BossListAtom } from "../../src/index"
import { useRecoilState } from "recoil";


export default function Ep01() {

    // 화면에 표시할 시간 설정
    const [nextYear, setNextYear] = useState([]);
    const [nextMonth, setNextMonth] = useState([]);
    const [nextDay, setNextDay] = useState([]);
    const [nextHour, setNextHour] = useState([]);
    const [nextMinute, setNextMinute] = useState([]);
    const [nextSecond, setNextSecond] = useState([]);
    const [bossData, setBossData] = useRecoilState(ep01BossListAtom);

    // episode1의 collection Name
    const q = query(collection(dbService, "episode1"));

    // 설정된 다음 시간을 받아오는 부분
    async function getNextApperanceTime() {
        try {
            
            const docSnap1 = await getDoc(doc(dbService, "episode1", "episode1_1"));
            const docSnap2 = await getDoc(doc(dbService, "episode1", "episode1_2"));

            const timeField1 = docSnap1.data();
            const timeField2 = docSnap2.data();

            const nextYearList = [timeField1.nextYear, timeField2.nextYear];
            const nextMonthList = [timeField1.nextMonth, timeField2.nextMonth];
            const nextDayList = [timeField1.nextDay, timeField2.nextDay];
            const nextHourList = [timeField1.nextHour, timeField2.nextHour];
            const nextMinuteList = [timeField1.nextMinute, timeField2.nextMinute];
            const nextSecondList = [timeField1.nextSecond, timeField2.nextSecond];

            setNextYear(nextYearList);
            setNextMonth(nextMonthList);
            setNextDay(nextDayList);
            setNextHour(nextHourList);
            setNextMinute(nextMinuteList);
            setNextSecond(nextSecondList);

        } catch (error) {
            alert(new Error(error));
        }

    }


    // 매 첫 렌더링 때마다, 값을 받아옴
    useEffect(() => {
        getNextApperanceTime();
    }, [])


    // 매 첫 렌더링 때마다, 데이터베이스로부터 값을 얻어와 state값을 초기화함 
    useEffect(()=>{
        onSnapshot(q, (snapshot) => {
            const newData = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));

            const nextYearList = [];
            const nextMonthList = [];
            const nextDayList = [];
            const nextHourList = [];
            const nextMinuteList = [];
            const nextSecondList = [];
            
            newData.map((data)=>{
                nextYearList.push(data.nextYear);
                nextMonthList.push(data.nextMonth);
                nextDayList.push(data.nextDay);
                nextHourList.push(data.nextHour);
                nextMinuteList.push(data.nextMinute);
                nextSecondList.push(data.nextSecond);
            })

            setNextYear(nextYearList);
            setNextMonth(nextMonthList);
            setNextDay(nextDayList);
            setNextHour(nextHourList);
            setNextMinute(nextMinuteList);
            setNextSecond(nextSecondList);
          });
    },[])

    


    const EpContent = ({ id, areaName, bossName, time }) => {

        // 데이터베이스의 값 설정
        function setDBTime(newData, id) {
            return setDoc(doc(dbService, `episode1`, `episode1_${id}`), newData, {
                merge: true,
            });
        }

        // 다음 시간 설정
        function setNextApperanceTime(e) {
            let date = new Date();

            // 2시간 추가
            date.setHours(date.getHours() + Number(time));

            // 2시간 추가했을 때의 문자열 반환

            const nextDBYear = String(date.getFullYear());
            const nextDBMonth = String(date.getMonth() + 1).padStart(2, "0");
            const nextDBDay = String(date.getDate()).padStart(2, "0");
            const nextDBHour = String(date.getHours()).padStart(2, "0");
            const nextDBMinute = String(date.getMinutes()).padStart(2, "0");
            const nextDBSecond = String(date.getSeconds()).padStart(2, "0");

            setDBTime({
                nextYear : nextDBYear,
                nextMonth: nextDBMonth,
                nextDay: nextDBDay,
                nextHour: nextDBHour,
                nextMinute: nextDBMinute,
                nextSecond: nextDBSecond
            }, id);
        }

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
                                <p className="mt-2">{`${nextYear[id-1]}년 ${nextMonth[id-1]}월 ${nextDay[id-1]}일 ${nextHour[id-1]}시 ${nextMinute[id-1]}분`}</p>
                            </div>
                            <button className = "inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={setNextApperanceTime}>
                                갱신하기 
                            </button>         
                            <Timer year={nextYear[id-1]} month={nextMonth[id-1]} day={nextDay[id-1]} hour={nextHour[id-1]} min={nextMinute[id-1]} sec={nextSecond[id-1]} />
                        </div>
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
                            {
                                bossData.map((element)=>{
                                    return (
                                        <React.Fragment key={element.id}>
                                            <EpContent id={element.id} areaName={element.area} bossName={element.bossName} time={element.time} />
                                        </React.Fragment>
                                    )
                                })
                            }
                        
                    </div>
                </Segment>
            </div>
        </section>
    )

}