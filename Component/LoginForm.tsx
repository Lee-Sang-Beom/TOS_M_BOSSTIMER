import { Dispatch, SetStateAction } from "react";
import { Form, Label, Input, Button, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

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
                    <Icon name="mail"/>
                    <label className="leading-7 text-sm text-gray-600 mail">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </Form.Field>
            <Form.Field>
                <div className="relative mb-4">
                <Icon name="user secret"/>
                    <label className="leading-7 text-sm text-gray-600">Password</label>
                    <input
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </Form.Field>
        </>
    )
}
