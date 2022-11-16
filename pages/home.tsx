import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import EpisodeSection from "../Component/episodeSection";
import { userLoginMonitoringAtom } from "../src/index"
import { authService as auth } from '../firebaseConfig'
import { useRecoilState } from "recoil";

export default function Home() {

  const [userLogin, setUserLogin] = useRecoilState(userLoginMonitoringAtom);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLogin(true);
      } else {
        setUserLogin(false);
      }
    });
  }, []);

  const router = useRouter();

  const onLogOutClick = () => {
    auth.signOut();
    router.replace("/");
  };

  return (
    <div>
      <EpisodeSection/>
      <button
        className="text-sm w-1/3 mt-4 createAccount_btn bg-slate-600 text-white"
        onClick={onLogOutClick}>
        {`로그아웃하기`}
      </button>

    </div>

  )
}
