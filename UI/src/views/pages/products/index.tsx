import React from 'react';
import Table, {TableHead} from "../../../components/tables/table.tsx";
import Button from "../../../components/buttons/button.tsx";
import {FiPlus, FiSearch} from "react-icons/fi";
import Search from "../../../components/inputs/search.tsx";

const Products: React.FC = () => {
    return (
        <section className="bg-gray-50  p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">

                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div
                        className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <Search icon=<FiSearch/> placeholder={"Search product"}/>
                        <div
                            className="md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <Button icon={<FiPlus/>} title={"Add Product"}/>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-black dark:text-black">
                            <TableHead/>
                            <tbody>
                                <Table/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products