import React from 'react';

interface ButtonProps {
    title:string
}
const Button: React.FC<ButtonProps> = (props) => {
    const {title} = props
    return (
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            {title}
        </button>
    )
}

export default Button
