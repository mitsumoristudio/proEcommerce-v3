
import React, {useState, useEffect} from 'react';
import { PiUserFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
import {assets} from "../assets/assets";
import { FaTrash } from "react-icons/fa6";

import SettingSection from "../components/SettingSection";
import ToggleSwitch from "../components/ToggleSwitch";
import {motion} from "framer-motion";
import {useProfileMutation, useDeleteUserMutation} from "../features/slices/userApiSlice";
import {useSelector, useDispatch, } from "react-redux";
import CustomLoader from "../components/CustomLoader";
import {toast} from "react-toastify";
import {setCredentials} from "../features/slices/authSlice";
import {useNavigate} from "react-router-dom";

export default function SettingsScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openEdit, setOpenEdit] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [twoFactor, setTwoFactor] = useState(false);

    const [updateUserProfile ] = useProfileMutation();
    const {userInfo} = useSelector((state) => state.auth)
    const [deleteUserProfile] = useDeleteUserMutation();

    // check to see if we can set the names in textfield
    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name);
            setEmail(userInfo.email);

        }
    }, [userInfo, userInfo.name, userInfo.email]);

    const onSubmitProfileHandler = async (e) => {
        e.preventDefault();

            try {
                const res = await updateUserProfile({
                    _id: userInfo._id,
                    name: name,
                    email: email,
                })
                // cache the userInfo into local storage
                dispatch(setCredentials(res));
                toast.success("Profile was updated successfully!");

                // Close the Popup Button
                setOpenEdit(false);

            } catch (err) {
                toast.error(err?.data?.message || err.message);
            }
    }

    const onDeleteUserHandler = async (userid) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUserProfile(userid);
                toast.success("User deleted successfully!");
                navigate("/")
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    }

    const onSubmitPasswordHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await updateUserProfile({
                password: password,
            })
            dispatch(setCredentials(res));
            toast.success("Password was updated successfully!");

            // close the Password Popup
            setOpenChangePassword(false);
        } catch (err) {
            toast.error(err?.data?.message || err.message);
        }
    }

    return (
        <>
                <main className={"flex-1 overflow-auto relative z-10 bg-gray-900 px-4"}>
                    <header
                        className={"bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg mb-6 border-b border-gray-700"}>
                        <div className={"max-w-7xl mx-auto py-4 sm: px-6 lg:px-8 ml-20"}>
                            <h1 className={"text-4xl font-semibold text-gray-100"}>Settings</h1>
                        </div>
                    </header>

                    <SettingSection title={"Profile"} icon={PiUserFill}>
                        <div className={"flex flex-col sm:flex-row items-center mb-6 gap-4"}>
                            <div className='flex-shrink-0 h-10 w-10'>
                                <div
                                    className='h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                    {userInfo.name.charAt(0)}
                                </div>
                            </div>

                            <div className={"flex flex-col items-start mb-6 my-2"}>
                                <h3 className={"text-lg font-semibold text-gray-100 border-b border-white mb-2"}>User</h3>
                                <p className={"text-gray-400"}>{userInfo.name}</p>
                                <p className={"text-gray-400"}>{userInfo.email}</p>
                            </div>
                        </div>

                        <button onClick={() => setOpenEdit(true)}
                                className={'bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300' +
                                    'w-full sm: w-auto'}>
                            Edit Profile
                        </button>
                    </SettingSection>

                    {/*Opening the Edit button */}
                    {openEdit && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                                <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            required={true}
                                            value={name}
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="John Doe"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required={true}
                                            value={email}
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="john@example.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setOpenEdit(false)}
                                            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={onSubmitProfileHandler}
                                            type="submit"
                                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    { /* Security Password */}
                    <SettingSection icon={FaLock} title={"Security"}>
                        <ToggleSwitch
                            label={"Two-Factor Authentication"}
                            isOn={twoFactor}
                            onToggle={() => setTwoFactor(!twoFactor)}
                        />
                        <div className={'mt-4'}>
                            <button
                                onClick={() => setOpenChangePassword(true)}
                                type="button"
                                className={'bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300' +
                                    'w-full sm: w-auto'}>
                                Change Password
                            </button>
                        </div>
                    </SettingSection>

                    {/*Opening the Change Password */}
                    {openChangePassword && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                                <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="******"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="confirmpassword"
                                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="******"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setOpenChangePassword(false)}
                                            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={onSubmitPasswordHandler}
                                            type="submit"
                                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    { /* Delete Users Account */}
                    <motion.div
                        className={'bg-red-900 opacity-85 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.5}}
                    >
                        <div className={'flex items-center mb-4'}>
                            <FaTrash className={'text-red-400 mr-3 size-14'}/>
                            <h2 className={'text-xl font-semibold text-gray-100'}>Danger Zone</h2>

                        </div>
                        <p className={'text-gray-300 mb-4'}> Permanently Delete Your Account</p>

                        <button
                            type={"submit"}
                            onClick={onDeleteUserHandler}
                            className={'bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded transition duration-300'}>
                            Delete Account
                        </button>
                    </motion.div>

                </main>
        </>
    )
}