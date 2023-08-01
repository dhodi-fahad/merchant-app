import React from 'react';
import ListItem from "./item.tsx";
// import dashboard from "../../assets/sidebar/svgs/dashboard.svg";
// import products from "../../assets/sidebar/svgs/products.svg";
import {FiGrid, FiPackage, FiTag, FiShoppingCart, FiSettings} from "react-icons/fi";

const Sidebar: React.FC = () => {
    return(
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-2 py-2 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <ListItem icon=<FiGrid/> title={"Dashboard"}/>
                        <ListItem icon=<FiTag/> title={"Sales"}/>
                        <ListItem icon=<FiPackage/> title={"Products"}/>
                        <ListItem icon=<FiShoppingCart/> title={"Purchases"}/>
                        <ListItem icon=<FiSettings/> title={"Settings"}/>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar