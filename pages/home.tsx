import { authService as auth } from "../firebaseConfig";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Icon, Label } from "semantic-ui-react";

export default function Home() {

  const router = useRouter();
  const onLogOutClick = () => {
    auth.signOut();
    router.replace("/");
  };

  return (
    <>
      <button
        className="text-sm w-1/3
       mt-4 createAccount_btn bg-slate-600 text-white"
        onClick={onLogOutClick}>
        {`로그아웃하기`}
      </button>
      <h1>
        Home 화면입니다.
      </h1>
      <ol>
        <li>로그아웃 기능 구현 완료</li>
        <li>에피소드 별 타이머 확인 이동 기능 추가 예정</li>
      </ol>
    </>

  )
}
