import React, {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import {useLoginMutation} from "../features/slices/userApiSlice";
import {setCredentials} from "../features/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";

export default function LoginScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, {isLoading}] = useLoginMutation();
    const {userInfo} = useSelector((state) => state.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (userInfo) {
            navigate((redirect));
        }
    }, [navigate, redirect, userInfo]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res,}));
            navigate(redirect);
        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    }

    return (
        <>
            <form className={'min-h-[80vh] flex items-center'}
            onSubmit={onSubmitHandler}>
                <div
                    className={'flex flex-col gap-3 m-auto items-start p-8 min-w-[360px] sm: min-w-120 border rounded-xl text-zinc-700 text-sm shadow-lg '}>
                    <p className={'text-3xl font-semibold mb-2'}> Login</p>

                    <div className={'w-full '}>
                        <p className={"mb-2 text-lg font-semibold"}>Email</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter your email"} type={'email'} value={email} required={true}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={'w-full'}>
                        <p className={"mb-2 text-lg font-semibold"}>Password</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter your password"} type={'password'} value={password} required={true}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex max-w-xs  mt-2 flex-1 items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    >
                        Sign In
                    </button>

                    <div className={"flex flex-col items-center"}>
                    <p className={"text-gray-800 w-full items-center ml-12"}>Create a new account
                        <span>  </span>
                        <span className={"text-indigo-700 font-semibold underline cursor-pointer"}>
                            <Link to={"/register"}> Click here </Link>

                        </span></p>
                    </div>

                </div>
            </form>
        </>
    )
}