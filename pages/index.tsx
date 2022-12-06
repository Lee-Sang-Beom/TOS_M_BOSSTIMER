import { authService as auth } from "../firebaseConfig";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Sign from "../Component/sign";
import Loading from "../Component/Loading";
import { useRecoilState } from "recoil";
import { isSignedAtom } from "../src/index";

export default function Main() {
  const router = useRouter();

  // 로그인 상태 관리 atom (header, footer 표시여부 결정)
  const [isSigned, setIsSigned] = useRecoilState(isSignedAtom);
  const [init, setInit] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        // 로그인 되어있는가? : 아직 본격적으로 이 state를 활용하지는 않음
        setIsSigned(true);
        router.replace("/home", undefined, {shallow: true});
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
        <Loading/>
      }
    </>
  )
}
