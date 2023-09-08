import React, {ChangeEvent} from 'react';

interface SelectInputProps {
    label: string
    name: string
    value: string | number
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: {
        value:string | number
        id: number
    }[]
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
    const {label, name, value, onChange, options} = props
    return (
        <div className="mb-6">
            <label htmlFor="default" className="block mb-2 text-sm font-normal text-black">{label}</label>

            <select id="default"
                    className="bg-gray-50 border border-gray-600 text-black text-sm
                               rounded-lg focus:ring-gray-400 focus:border-gray-400 block  p-2.5
                               placeholder-gray-400 "
                    name={name}
                    value={value}
                    onChange={onChange}
            >

            {options.map((option, index)=><option key={index} value={option.id}>{option.value}</option>)}
            </select>
        </div>
    )
}

export default SelectInput

interface SelectProps {
    name: string
    value: string | number
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: {
        value:string | number
        id: number
    }[]
}

export const Select:React.FC<SelectProps> = (props) => {
    const {name, value, onChange, options} = props
    return (
        <div className="mb-6">
            <select id="default"
                    className="bg-gray-50 border border-gray-600 text-black text-sm
                               rounded-lg focus:ring-gray-400 focus:border-gray-400 block  p-2.5
                               placeholder-gray-400 "
                    name={name}
                    value={value}
                    onChange={onChange}
            >

                {options.map((option, index)=><option key={index} value={option.id}>{option.value}</option>)}
            </select>
        </div>
    )
}


