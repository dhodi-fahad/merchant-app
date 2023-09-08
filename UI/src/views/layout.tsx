import React from 'react';
import Sidebar from "../components/sidebar/sidebar.tsx";
import Wrapper from "./wrapper.tsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashborad.tsx";
import Products from "./pages/products";
import AddProduct from "./pages/products/addproduct.tsx";
import AddSale from "./pages/sales/addsale.tsx";
import Sales from "./pages/sales";
import AddPurchase from "./pages/purchases/addpurchase.tsx";
import Purchases from "./pages/purchases";
import Navbar from "../components/navbar/navbar.tsx";

const Layout: React.FC = () => {
    return(
        <div className="flex flex-row font-primary">
            <Sidebar/>

            <Wrapper>
                <Navbar/>
                <Routes>
                    <Route index path="/" element={<Dashboard/>} />
                    <Route path="products" element={<Products/>}/>
                    <Route path="add-product" element={<AddProduct/>}/>
                    <Route path="new-sale" element={<AddSale/>}/>
                    <Route path="sales" element={<Sales/>}/>
                    <Route path="new-purchase" element={<AddPurchase/>}/>
                    <Route path="purchases" element={<Purchases/>}/>
                </Routes>
            </Wrapper>
        </div>
    )
}

export default Layout