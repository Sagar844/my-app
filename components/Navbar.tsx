
import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { SiAirplayvideo } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <div>
                <div className="flex justify-between items-center mt-0">
                    <Link href='/'>
                        <h1 className={"cursor-pointer  text-3xl font-bold   " + `${router.pathname === '/' ? 'text-blue-500' : 'text-white'}`}>facebook</h1>
                    </Link>

                    <div className="flex space-x-5 font-bold text-2xl items-center">
                        <h1 className="bg-[#3a3b3c] p-2 rounded-full ">
                            <FaSearch />
                        </h1>
                        <div className="bg-[#3a3b3c]  p-2 rounded-full ">
                            <RxHamburgerMenu />
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 space-x-12 text-2xl  items-center ">
                    <Link className={"cursor-pointer  rounded-sm " + `${router.pathname === '/' ? 'text-blue-500' : 'text-white'}`} href="/">
                        <AiFillHome />
                    </Link>
                    <Link className={"cursor-pointer  rounded-sm " + `${router.pathname === '/Person' ? 'text-blue-500' : 'text-white'}`} href="/Person">

                        <BsPersonPlus />

                    </Link>
                    <Link className={"cursor-pointer  rounded-sm " + `${router.pathname === '/Message' ? 'text-blue-500' : 'text-white'}`} href="/Message">
                        <BsMessenger />
                    </Link>
                    <Link className={"cursor-pointer  rounded-sm " + `${router.pathname === '/Videos' ? 'text-blue-500' : 'text-white'}`} href="/Videos">
                        <SiAirplayvideo />
                    </Link>
                    <Link className={"cursor-pointer  rounded-sm " + `${router.pathname === '/Notification' ? 'text-blue-500' : 'text-white'}`} href="/Notification">

                        <IoMdNotifications />

                    </Link>
                </div>
                <hr className="mt-4" />
            </div>
        </>
    );
};

Navbar.defaultProps = {};
export default Navbar;
