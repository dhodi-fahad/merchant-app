import React, {MouseEventHandler, ReactNode} from 'react';

interface ButtonProps {
    title: string;
    icon?: ReactNode;
    handleOnClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = (props) => {
    const {title, icon, handleOnClick} = props
    return (
        <button type="button" className="flex items-center w-fit  text-black border border-gray-200 bg-gray-300 focus:text-black focus:bg-gray-200 hover:text-black hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 font-normal rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2"
            onClick={handleOnClick}
        >
            {icon?<span className="px-1">{icon}</span>:null}
            {title}
        </button>
    )
}

export default Button
