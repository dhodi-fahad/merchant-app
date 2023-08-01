import React, {ReactNode} from 'react';

interface ListItemProps {
    icon: ReactNode;
    title: string;
}
const ListItem: React.FC<ListItemProps> = ({icon, title}) => {
    return(
        <li>
            <a href="#" className="flex items-center p-2 text-black font-normal rounded-lg hover:bg-purple-100 group">
                {icon}
                <span className="ml-3">{title}</span>
            </a>
        </li>
    )
}

export default ListItem