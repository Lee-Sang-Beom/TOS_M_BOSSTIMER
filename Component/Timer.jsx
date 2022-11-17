import React, { useState, useEffect, useRef } from "react";
import { Label } from "semantic-ui-react";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const handleTimeDifference = (year, month, day, hour, min, sec) => {
  if(year && month && day && hour && min && sec){
    const end = new Date(year, month-1, day, hour, min, sec);
    const start = new Date();

    const diffSec = Math.floor((end.getTime() - start.getTime()) / (1000) % 60);
    const diffMin = Math.floor((end.getTime() - start.getTime()) / (1000*60) % 60);
    const diffHour = Math.floor((end.getTime() - start.getTime()) / (1000*60*60));

    return [diffSec, diffMin, diffHour];
  }
  
}

const Timer = (props) => {
  let diffSec;
  let diffMin;
  let diffHour;
  
  if (handleTimeDifference(props.year, props.month, props.day, props.hour, props.min, props.sec)){
    [diffSec, diffMin, diffHour] = handleTimeDifference(props.year, props.month, props.day, props.hour, props.min, props.sec)
  }

  // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..
  const tempHour = diffHour ? parseInt(diffHour) : 0;
  const tempMin = diffMin ? parseInt(diffMin) : 0;
  const tempSec = diffSec ? parseInt(diffSec) : 0;

  // 만약 timer가 종료되면, true로 변경되며 사용자들에게 갱신의 필요성을 알림..
  const [showWaring, setShowWarning] = useState(false);

  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  let initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
  const interval = useRef(0);

  const [hour, setHour] = useState(padNumber(tempHour, 2));
  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  useEffect(() => {
    // useRef 사용 : useRef를 사용한 interval.current 값을 initalTime를 이용해 사용
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(parseInt(initialTime.current % 60), 2));
      setMin(padNumber(parseInt((initialTime.current / 60) % 60), 2));
      setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if (initialTime.current <= 0) {
      setSec(padNumber(0, 2));
      setMin(padNumber(0, 2));
      setHour(padNumber(0, 2));
      setShowWarning(true);
      // 종료조건 : 타이머 종료
      clearInterval(interval.current);
      // 타이머 종료 시, 이 때 알림을 울리면 됨
    }
  }, [sec]);


  return (
    <>
      <div className="border border-gray-200 mt-2 p-3 rounded-lg">
        <div className="w-full p-4 flex flex-col items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2">
          <p className="text-sm text-indigo-800">{`남은 시간`}</p>
          <p className="text-sm text-red-500">
            {hour} : {min} : {sec}
          </p>
        </div>
        {showWaring && <Label basic color='red' pointing> 시간이 지났습니다. 갱신이 필요합니다! </Label>}
      </div>

    </>
  );
};

export default Timer;
