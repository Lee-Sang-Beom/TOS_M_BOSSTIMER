import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Form, Icon, Segment } from "semantic-ui-react";
import { dbService } from "../../firebaseConfig.js";
import Timer from "../Timer.jsx";
import { ep07BossListAtom } from "../../src/index";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Ep07_Ch1() {
  // 남은시간 설정을 위한 state 데이터
  const [hour, setHour] = useState([0, 0, 0, 0]);
  const [min, setMin] = useState([0, 0, 0, 0]);

  // 화면에 표시할 시간 설정
  const [nextYear, setNextYear] = useState([]);
  const [nextMonth, setNextMonth] = useState([]);
  const [nextDay, setNextDay] = useState([]);
  const [nextHour, setNextHour] = useState([]);
  const [nextMinute, setNextMinute] = useState([]);
  const [nextSecond, setNextSecond] = useState([]);
  const [bossData, setBossData] = useRecoilState(ep07BossListAtom);

  // episode7_ch1의 collection Name
  const q = query(collection(dbService, "episode7"));

  // 설정된 다음 시간을 받아오는 부분
  async function getNextApperanceTime() {
    try {
      const docSnap1 = await getDoc(doc(dbService, "episode7", "episode7_1"));
      const docSnap2 = await getDoc(doc(dbService, "episode7", "episode7_2"));
      const docSnap3 = await getDoc(doc(dbService, "episode7", "episode7_3"));
      const docSnap4 = await getDoc(doc(dbService, "episode7", "episode7_4"));

      const timeField1 = docSnap1.data();
      const timeField2 = docSnap2.data();
      const timeField3 = docSnap3.data();
      const timeField4 = docSnap4.data();

      // 차후 push 사용으로 코드 간소화
      const nextYearList = [
        timeField1.nextYear,
        timeField2.nextYear,
        timeField3.nextYear,
        timeField4.nextYear,
      ];

      const nextMonthList = [
        timeField1.nextMonth,
        timeField2.nextMonth,
        timeField3.nextMonth,
        timeField4.nextMonth,
      ];

      const nextDayList = [
        timeField1.nextDay,
        timeField2.nextDay,
        timeField3.nextDay,
        timeField4.nextDay,
      ];

      const nextHourList = [
        timeField1.nextHour,
        timeField2.nextHour,
        timeField3.nextHour,
        timeField4.nextHour,
      ];

      const nextMinuteList = [
        timeField1.nextMinute,
        timeField2.nextMinute,
        timeField3.nextMinute,
        timeField4.nextMinute,
      ];

      const nextSecondList = [
        timeField1.nextSecond,
        timeField2.nextSecond,
        timeField3.nextSecond,
        timeField4.nextSecond,
      ];

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
  }, []);

  // 매 첫 렌더링 때마다, 데이터베이스로부터 값을 얻어와 state값을 초기화함
  useEffect(() => {
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

      newData.map((data) => {
        nextYearList.push(data.nextYear);
        nextMonthList.push(data.nextMonth);
        nextDayList.push(data.nextDay);
        nextHourList.push(data.nextHour);
        nextMinuteList.push(data.nextMinute);
        nextSecondList.push(data.nextSecond);
      });

      setNextYear(nextYearList);
      setNextMonth(nextMonthList);
      setNextDay(nextDayList);
      setNextHour(nextHourList);
      setNextMinute(nextMinuteList);
      setNextSecond(nextSecondList);
    });
  }, []);

  const EpContent = ({ id, areaName, bossName, time }) => {
    function notify() {
      toast(`에피소드 7(채널 1)의 ${bossName}의 필드 이벤트가 5분 남았어요!`, {
        limit: 1,
        autoClose: 300000,
        pauseOnFocusLoss: false,
      });
    }

    // 데이터베이스의 값 설정
    function setDBTime(newData, id) {
      return setDoc(doc(dbService, `episode7`, `episode7_${id}`), newData, {
        merge: true,
      });
    }

    // 다음 시간 설정
    function setNextApperanceTime(e) {
      let date = new Date();

      // 보스 대기시간인 time만큼 시간 추가
      date.setHours(date.getHours() + Number(time));

      // time만큼 시간을 추가했을 때의 문자열 반환
      const nextDBYear = String(date.getFullYear());
      const nextDBMonth = String(date.getMonth() + 1).padStart(2, "0");
      const nextDBDay = String(date.getDate()).padStart(2, "0");
      const nextDBHour = String(date.getHours()).padStart(2, "0");
      const nextDBMinute = String(date.getMinutes()).padStart(2, "0");
      const nextDBSecond = String(date.getSeconds()).padStart(2, "0");

      // DB에 적용할 값 전달
      setDBTime(
        {
          nextYear: nextDBYear,
          nextMonth: nextDBMonth,
          nextDay: nextDBDay,
          nextHour: nextDBHour,
          nextMinute: nextDBMinute,
          nextSecond: nextDBSecond,
        },
        id
      );
    }

    function changeHour(e) {
        const newState = hour.map((item, idx) => {
          if (idx === id - 1) {
            return e.target.value;
          } else {
            return item;
          }
        });
        setHour(newState);
      }
      function changeMin(e) {
        const newState = min.map((item, idx) => {
          if (idx === id - 1) {
            return e.target.value;
          } else {
            return item;
          }
        });
        setMin(newState);
      }
      
    return (
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className="text-gray-900 mb-1 text-lg font-semibold">{`- ${areaName} -`}</h2>
            <p className="text-gray-900 mb-4 text-base">{`${bossName}`}</p>
            <div className="border border-gray-200 p-3 rounded-lg clock_relative">
              <div className="clock_icon_top">🧭</div>
              <div className="w-full p-4 flex flex-col items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
                <p className="text-sm text-indigo-800">{`필드 이벤트 시작 시간 `}</p>
                <p className="mt-2">{`${nextYear[id - 1]}년 ${
                  nextMonth[id - 1]
                }월 ${nextDay[id - 1]}일 ${nextHour[id - 1]}시 ${
                  nextMinute[id - 1]
                }분`}</p>
              </div>
              <Form>
                <Form.Field>
                  <div className="relative mb-4">
                    <Icon name="mail" />
                    <label className="leading-7 text-sm text-gray-600 mail">
                      Hour
                    </label>
                    <input
                      type="number"
                      value={hour[id - 1]}
                      onChange={changeHour}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="relative mb-4">
                    <Icon name="user secret" />
                    <label className="leading-7 text-sm text-gray-600">
                      Minute
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      value={min[id - 1]}
                      onChange={changeMin}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </Form.Field>
              </Form>
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={setNextApperanceTime}
              >
                갱신하기
              </button>
              <Timer
                year={nextYear[id - 1]}
                month={nextMonth[id - 1]}
                day={nextDay[id - 1]}
                hour={nextHour[id - 1]}
                min={nextMinute[id - 1]}
                sec={nextSecond[id - 1]}
                notify={notify}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {`EP07(채널 1)`}
        </h1>
        <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
          {`에피소드7 (채널 1)의 필드보스 타이머입니다.`}
        </p>
        <Segment>
          <div className="flex flex-wrap -m-2">
            {bossData.map((element) => {
              return (
                <React.Fragment key={element.id}>
                  <EpContent
                    id={element.id}
                    areaName={element.area}
                    bossName={element.bossName}
                    time={element.time}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </Segment>
      </div>
    </section>
  );
}
