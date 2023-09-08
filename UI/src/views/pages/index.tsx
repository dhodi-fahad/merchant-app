import React from 'react';
import {Outlet} from "react-router-dom";

const Pages: React.FC = () =>{
    return(
        <>
            <Outlet/>
        </>

    )
}

export default Pages