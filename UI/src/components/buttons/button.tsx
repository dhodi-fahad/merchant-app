import React, {ReactNode} from 'react';

interface ButtonProps {
    title: string;
    icon?: ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
    const {title, icon} = props
    return (
        <button type="button" className="flex items-center w-fit  text-white border border-gray-600 bg-gray-600 focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 font-normal rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">
            {icon?<span className="px-1">{icon}</span>:null}
            {title}
        </button>
    )
}

export default Button
