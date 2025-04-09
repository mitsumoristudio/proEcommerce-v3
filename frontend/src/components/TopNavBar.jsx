import React from "react";
import {useState, useEffect} from "react";
import {assets} from "../assets/assets";
import {NavLink, useNavigate} from "react-router-dom";
import {FaShoppingCart, FaUser, FaFlagUsa} from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import CartPopOver from "./CartPopOver";


export default function TopNavBar() {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <>
            {/* Navbar Admin Icon */}
            <header>
            <div className={'flex items-center justify-between text-sm px-1 border-b border-b-gray-600'}>
                <div className={'flex items-center justify-center px-1 mx-1 gap-2'}>
                <img onClick={() => navigate("/")}
                     alt={"header-logo"}
                     className={"size-11 cursor-pointer justify-center mb-1"}
                     src={assets.admin_logo}/>
                    <div className={" flex gap-2 px-2 mb-1"}>
                <FaFlagUsa size={22} />
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

                    <NavLink to={"/about"}>
                        <li className={"py-2 md: text-md lg: text-lg xl: text-xl"}>ABOUT</li>
                        <hr className={'border-b outline-none h-0.5 bg-primary w-3/5 m-auto hidden'}/>
                    </NavLink>
                </ul>

                {/* Search Bar Shopping Cart and Login */}
                <div className={"flex items-center gap-6 px-4"}>
                    <SearchBar/>

                    {/*<NavLink to={"/carts"}>*/}
                    {/*    <FaShoppingCart size={26}/>*/}
                    {/*</NavLink>*/}
                    <div className={"flex items-center gap-3 cursor-pointer group relative "}>
                        <NavLink to={"/carts"}>
                            <FaShoppingCart size={26} />
                            <div className={"absolute top-0 right-0 pt-12 text-base font-medium text-gray-800 z-20 hidden group-hover:block"}>
                                <CartPopOver/>
                            </div>
                        </NavLink>
                    </div>

                    {/* User Login */}
                    <div className={"flex items-center gap-3 cursor-pointer group relative"}>
                        <NavLink to={"/login"}>
                            <FaUser size={26}/>
                            <div
                                className={"absolute top-0 right-0 pt-16 text-base font-medium text-gray-800 z-20 hidden group-hover:block"}>
                                <div className={"min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-3"}>
                                    <p className={"hover:text-gray-900 cursor-pointer"}>
                                        <NavLink to={"/profile"}>
                                            Profile
                                        </NavLink>
                                    </p>
                                    <p className={"hover:text-gray-900 cursor-pointer"}>
                                        <NavLink to={"/logout"}>
                                            Log out
                                        </NavLink>
                                    </p>

                                </div>
                            </div>
                        </NavLink>
                    </div>

                    {/* Admin Login */}
                    <div className={"flex items-center gap-3 cursor-pointer group relative"}>
                        <NavLink to={"/admin"}>
                            <RiAdminLine size={26}/>
                            <div
                                className={"absolute top-0 right-0 pt-16 text-base font-medium text-gray-800 z-20 hidden group-hover:block"}>
                                <div className={"min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-3"}>
                                    <p className={"hover:text-gray-900 cursor-pointer"}
                                      >
                                        <NavLink to={"/admin/orderlists"} >
                                            Orders
                                        </NavLink>

                                    </p>
                                    <p className={"hover:text-gray-900 cursor-pointer"}
                                       >
                                        <NavLink to={"/admin/productlists"}>
                                            Products
                                        </NavLink>
                                    </p>
                                    <p className={"hover:text-gray-900 cursor-pointer"}
                                       >
                                        <NavLink to={"/admin/userlists"}>
                                            Users
                                        </NavLink>

                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            </header>
        </>

    )
}