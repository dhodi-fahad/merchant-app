import React from 'react';

interface ListItemProps {
    svg: string;
    title: string;
}
const ListItem: React.FC<ListItemProps> = ({svg, title}) => {
    return(
        <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-purple-100 dark:hover:bg-purple-700 group">
                <img src={svg} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" alt="Dashboard Icon" />
                <span className="ml-3">{title}</span>
            </a>
        </li>
    )
}

export default ListItem