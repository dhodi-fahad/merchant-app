import React from 'react';
import Sidebar from "../components/sidebar/sidebar.tsx";
import Wrapper from "./wrapper.tsx";
import Navbar from "../components/navbar/navbar.tsx";
import Pages from "./pages";

const Layout: React.FC = () => {
    return(
        <div className="flex flex-row font-primary">
            <Sidebar/>
            <Wrapper>
                <Navbar/>
                <Pages/>
            </Wrapper>
        </div>
    )
}

export default Layout