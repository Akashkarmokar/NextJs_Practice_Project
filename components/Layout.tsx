import Navbar from "./Navbar";
import React from "react";
import { AppProps } from "next/app";

const Layout = ({children:ChildrenComponent}:any)=>{
    return (
        <div>
            <Navbar/>
            { ChildrenComponent }
        </div>
    )
}

export default Layout;