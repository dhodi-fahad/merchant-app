import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";

interface ListItemProps {
    icon: ReactNode;
    title: string;
    url: string
}
const ListItem: React.FC<ListItemProps> = ({icon, title, url}) => {
    return(
        <li>
            <Link to={url} className="flex items-center p-2 text-black font-normal rounded-lg hover:bg-purple-100 group">
                {icon}
                <span className="ml-3">{title}</span>
            </Link>
        </li>
    )
}

export default ListItem