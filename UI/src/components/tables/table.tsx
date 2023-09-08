import React, {ReactNode} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi'
const Table: React.FC = () => {
    return (<TableRow/>)
}

export default Table

export const TableHead: React.FC = () => {
    return(
        <thead className="text-normal text-black uppercase bg-white dark:bg-white dark:text-black">
            <tr>
                <HeadCell title={"Product Name"}/>
                <HeadCell title={"Category"}/>
                <HeadCell title={"Unit of sell"}/>
                <HeadCell title={"Description"}/>
                <HeadCell title={"Sell Price"}/>
                <HeadCell title={"Actions"}/>
            </tr>
        </thead>
    )
}

interface HeadCellProps {
    title: string;
}
export const HeadCell: React.FC<HeadCellProps> = (props) => {
    const {title} = props
    return (
        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400">{title}</th>
    )
}

export const TableRow: React.FC = () => {
    return (
        <tr className="border-b font-normal dark:border-gray-700">
            <Cell value={"Panadol"}/>
            <Cell value={"Tabs"}/>
            <Cell value={"Pair"}/>
            <Cell value={"Sell only pair"}/>
            <Cell value={"UGX 500"}/>
            <ActionBtn/>
        </tr>
    )
}


interface CellProps {
    value?: string;
    button?:ReactNode;
    menu?:ReactNode;
}

const Cell: React.FC<CellProps> = (props) => {
    const {value, button, menu} = props

    return(
        <td className="px-4 py-3">
            {value?value:null}
            {button?button:null}
            {menu?menu:null}
        </td>
    )
}

const ActionBtn: React.FC = () => {
     return(
         <td className="px-4 py-3 flex items-center justify-start">
             <button id="action-dropdown-button"
                     data-dropdown-toggle="apple-imac-27-dropdown"
                     className="inline-flex items-center p-0.5 text-sm font-medium text-center text-black hover:text-black rounded-lg focus:outline-none dark:text-black dark:hover:text-black"
                     type="button">
                 <FiMoreHorizontal className="w-5 h-5"/>
                 <ActionMenu/>
             </button>
         </td>
     )
}

const ActionMenu: React.FC = () => {
    return (
        <div id="action-dropdown-menu"
             className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-black dark:text-black"
                aria-labelledby="apple-imac-27-dropdown-button">

                <ActionMenuItem url={'#'} title={'View'}/>
                <ActionMenuItem url={'#'} title={'Edit'}/>
            </ul>
            <div className="py-1">
                <a href="#"
                   className="block py-2 px-4 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">Delete</a>
            </div>
        </div>
    )
}

interface ActionMenuItemProps {
    url: string;
    title: string;
}
const ActionMenuItem: React.FC<ActionMenuItemProps> = (props) => {
    const {url, title} = props
    return (
        <li>
            <a href={url} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black">
                {title}
            </a>
        </li>
    )
}