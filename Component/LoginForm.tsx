import { Dispatch, SetStateAction } from "react";
import { Form, Label, Input, Button } from "semantic-ui-react";

interface Props {
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    password: string
    setPassWord: Dispatch<SetStateAction<string>>
  }

export default function LoginForm({email, setEmail, password, setPassWord}: Props) {

    return (
        <>
            <Form.Field>
                <div className="relative mb-4">
                    <Label className="leading-7 text-sm text-gray-600">Email</Label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </Form.Field>
            <Form.Field>
                <div className="relative mb-4">
                    <Label className="leading-7 text-sm text-gray-600">Password</Label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </Form.Field>
        </>
    )
}
