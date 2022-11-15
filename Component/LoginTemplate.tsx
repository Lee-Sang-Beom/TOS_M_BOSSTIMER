import { authService as auth } from "../firebaseConfig";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { dbService as db } from "../firebaseConfig";
import { Form, Label, Input, Button } from "semantic-ui-react";
import LoginForm from "./LoginForm";

export default function LoginTemplate() {

    // 이메일, 비밀번호, 닉네임 상태 관리
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [displayName, setDisplayName] = useState("");

    // 오류정보 관리
    const [error, setError] = useState("");

    // 회원가입 | 로그인 선택 상태 관리
    const [newAccount, setNewAccount] = useState(false);


    // error를 사용자가 보고 이해할 수 있게 변환하여 출력
    function getErrorText(error: any): string {

        // 비구조화 할당
        const { code } = error;

        // 오류 처리
        if (code === "auth/invalid-email") {
            return "이메일 오류! 올바른 이메일 형식이 아닙니다.";
        } else if (code === "auth/wrong-password") {
            return "비밀번호 오류! 비밀번호가 올바르지 않습니다.";
        } else if (code === "auth/user-not-found") {
            return "등록되지 않은 사용자입니다. 아래 회원가입 버튼을 눌러 입력 창을 전환해주세요.";
        } else {
            return "알 수 없는 오류입니다. 관리자에게 문의하세요.";
        }
    }

    // 제출 시 발생하는 이벤트
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            if (newAccount) {
                // create Account
                const data = await createUserWithEmailAndPassword(auth, email, password)
                    .then(({ user }) => {
                        setDoc(
                            doc(db, "userInfo", user.uid),
                            { displayName },
                            { merge: true }
                        );
                    });
            }
            else {
                const data = await signInWithEmailAndPassword(auth, email, password);

            }
        } catch (error: any) {
            setError(getErrorText(error));
        }

    }

    // 회원가입과 로그인 Form 전환
    const changeForm = () => {
        setNewAccount((prev) => !prev);
        setError("");
    }

    return (
        <div className="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">{!newAccount ? `로그인` : `회원가입`}</h2>
            <Form onSubmit={onSubmit}>
                <LoginForm email={email} setEmail={setEmail} password={password} setPassWord={setPassWord} />
                {newAccount &&
                    <>
                        <Form.Field>
                            <div className="relative mb-4">
                                <Label className="leading-7 text-sm text-gray-600">닉네임</Label>
                                <input
                                    type="text"
                                    required
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </Form.Field>
                    </>}
                <div className="flex items-center">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{!newAccount ? `로그인` : `회원가입`}</button>
                </div>
                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            </Form>

            <div>
                {!newAccount ?
                    <button className="text-sm w-full mt-4 createAccount_btn bg-slate-600 text-white" onClick={changeForm}>
                        {`회원가입 입력으로 전환하기`}
                    </button>
                    :
                    <button className="text-sm w-full mt-4 login_btn bg-slate-600 text-white" onClick={changeForm}>
                        {`로그인 입력으로 전환하기`}
                    </button>}
            </div>
        </div>
    )
}
