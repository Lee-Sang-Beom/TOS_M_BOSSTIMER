import { authService as auth } from "../firebaseConfig";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { dbService as db } from "../firebaseConfig";
import { Form } from "semantic-ui-react";

export default function AuthForm() {

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState("");

    // input className (tailwind style)
    const inputClassName = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

    function getErrorText(error:any):string{
        const { code } = error;
    // 오류 처리
    if (code === "auth/invalid-email"){
        return "이메일 오류! 올바른 이메일 형식이 아닙니다.";
    } else if (code === "auth/wrong-password"){
      return "비밀번호 오류! 비밀번호가 올바르지 않습니다.";
    } else if (code === "auth/user-not-found"){
        return "등록되지 않은 사용자입니다. 아래의 회원가입 버튼을 눌러주세요.";
    } else{
        return "알 수 없는 오류입니다. 관리자에게 문의하세요.";
    }
}

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const data = await signInWithEmailAndPassword(auth, email, password);
        } catch (error : any) {
            console.log(error);
            setError(getErrorText(error));
        }

    }

    return (
        <div className="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClassName} />
                    </div>
                </Form.Field>
                <Form.Field>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassWord(e.target.value)}
                            className={inputClassName} />
                    </div>
                </Form.Field>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                {error && <p className="mt-2">{error}</p>}

            </Form>



        </div>
    )
}
