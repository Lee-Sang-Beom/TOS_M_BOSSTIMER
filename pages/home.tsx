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

  return (
    <div>
      <EpisodeSection/>
    </div>

  )
}
