import React from "react";
import {useState, useEffect} from "react";
import {assets} from "../assets/assets";
import {NavLink, useNavigate} from "react-router-dom";
import {FaShoppingCart, FaUser, FaFlagUsa} from "react-icons/fa";
import SearchBar from "./SearchBar";
import {DisclosureButton, Disclosure} from "@headlessui/react";

export default function TopNavBar() {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false);

    const headerProfileNavigation = [
        {name: "Profile", href: "/profile"},
        {name: "Sign out", href: "/signout"},
    ]

    return (
        <>
            {/* Navbar Admin Icon */}
            <div className={'flex items-center justify-between text-sm py-1 px-1 mb-2 border-b border-b-gray-600'}>
                <div className={'flex items-center justify-center px-1 mx-1 gap-2'}>
                <img onClick={() => navigate("/")}
                     alt={"header-logo"}
                     className={"size-11 cursor-pointer justify-center mb-1"}
                     src={assets.admin_logo}/>
                    <div className={" flex gap-2 px-2 mb-1"}>
                <FaFlagUsa size={26} />
                <h2>USD</h2>
                </div>
                    </div>

                {/* NavBar TabView HOME STORE CONTACT ABOUT */}
                <ul className={"hidden md:flex items-start gap-6 font-medium justify-start"}>
                    <NavLink to={"/"}>
                        <li className={"py-2 md: text-md lg: text-lg xl: text-xl"}>HOME</li>
                        <hr className={'border-b outline-none h-0.5 bg-primary w-3/5 m-auto hidden'}/>
                    </NavLink>

                    <NavLink to={"/store"}>
                        <li className={"py-2 md: text-md lg: text-lg xl: text-xl"}>STORE</li>
                        <hr className={'border-b outline-none h-0.5 bg-primary w-3/5 m-auto hidden'}/>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <li className={"py-2 md: text-md lg: text-lg xl: text-xl"}>CONTACT</li>
                        <hr className={'border-b outline-none h-0.5 bg-primary w-3/5 m-auto hidden'}/>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <li className={"py-2 md: text-md lg: text-lg xl: text-xl"}>ABOUT</li>
                        <hr className={'border-b outline-none h-0.5 bg-primary w-3/5 m-auto hidden'}/>
                    </NavLink>
                </ul>

                {/* Search Bar Shopping Cart and Login */}
                <div className={"flex items-center gap-6 px-4"}>
                    <SearchBar />

                    <NavLink to={"/cart"}>
                        <FaShoppingCart size={26} />
                    </NavLink>

                    <NavLink to={"/login"} >
                        <FaUser size={26} />
                    </NavLink>

        </div>
            </div>
        </>

    )
}