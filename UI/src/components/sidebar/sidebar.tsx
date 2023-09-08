import React from 'react';
import ListItem from "./item.tsx";
import merchant from "/Merchant.svg";
import {FiGrid, FiPackage, FiTag, FiShoppingCart, FiSettings} from "react-icons/fi";

const Sidebar: React.FC = () => {
    return(
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-2 py-2 overflow-y-auto">
                    <div className="py-5 flex align-middle">
                        <img src={merchant}
                             className="h-8 w-auto"
                             alt="Nsimbi Merchant Logo"/>
                    </div>

                    <ul className="space-y-2 font-medium">
                        <ListItem icon={<FiGrid/>} title={"Dashboard"} url={"/"}/>
                        <ListItem icon={<FiTag/>} title={"Sales"} url={"sales"}/>
                        <ListItem icon={<FiPackage/>} title={"Products"} url={"products"}/>
                        <ListItem icon={<FiShoppingCart/>} title={"Purchases"} url={"purchases"}/>
                        <ListItem icon={<FiSettings/>} title={"Settings"} url={"/"}/>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar