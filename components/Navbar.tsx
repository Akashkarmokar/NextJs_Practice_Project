import React from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";

const Navbar = ()=>{
    const [sidebar,setSidebar] = useState(false);

    const toggleSidebar = ()=>{
        setSidebar(!sidebar);
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl text-[#00df9a]">Ak.</h1>
            <ul className="hidden md:flex text-black  uppercase">
                <li className="p-4">Home</li>
                <li className="p-4">Blog</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={toggleSidebar} className="block md:hidden">
                { sidebar ? <AiOutlineClose size={20} color={'black'}/>: <AiOutlineMenu size={20} color={'black'}/>}
            </div>
            {/* Sidebar */ }    
            <ul className={sidebar ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#e5e3d4] text-black ease-in-out duration-500 sm:hidden' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className="w-full text-3xl text-[#00df9a] mt-8 text-center">Ak.</h1>
                <li className="p-4 text-center">Home</li>
                <li className="p-4 text-center">Blog</li>
                <li className="p-4 text-center">About</li>
                <li className="p-4 text-center">Contact</li>
                
            </ul>
        </div>
    )
}

export default Navbar