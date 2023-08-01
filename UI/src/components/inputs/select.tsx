import React from 'react';

interface SelectInputProps {
    label: string
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
    const {label} = props
    return (
        <div className="mb-6">
            <label htmlFor="default" className="block mb-2 text-sm font-normal text-black">{label}</label>
            <select id="default"
                    className="bg-gray-50 border border-gray-600 text-black text-sm
                               rounded-lg focus:ring-blue-400 focus:border-blue-400 block  p-2.5
                               placeholder-gray-400 ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
            </select>
        </div>
    )
}

export default SelectInput