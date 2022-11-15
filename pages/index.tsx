import { authService as auth } from "../firebaseConfig";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Sign from "../Component/sign";

export default function Main() {
  const router = useRouter();

  // 로그인 상태 관리 state
  const [isSigned, setIsSigned] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        // 로그인 되어있는가?
        setIsSigned(true);
        router.replace("/home");
      } else{
        setIsSigned(false);
      }

      // useEffect문 내에서, 해당 과정을 거쳐야 jsx의 내용이 진행되게 함
      setInit(true);
    })
  },[]);

  return (
    <>
      {
        init?
        <Sign />:
        "Loading..."
      }
    </>
  )
}
