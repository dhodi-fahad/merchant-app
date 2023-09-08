import React, { useState } from 'react';
import {Fi} from "react-icons/fi";

const testItems = [
    'Aspirin',
    'Ibuprofen',
    'Acetaminophen',
    'Amoxicillin',
    'Lisinopril',
    'Simvastatin',
    'Metformin',
    'Atorvastatin',
    'Omeprazole',
    'Losartan',
    'Gabapentin',
    'Hydrochlorothiazide saddfffdsf',
    'Metoprolol',
    'Prednisone',
    'Amlodipine',
];

interface SelectInput {
    placeholder: string
    label?:string
}
const SelectInput:React.FC<SelectInput> = (props) => {
    const {placeholder, label} = props
    const [showMore, setShowMore] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const clearSelectField = () => {
        setSelectedOption('');
    }
    const handleOptionSelect = (option:string) => {
        setSelectedOption(option);
        setShowMore(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedOption(value.trim());
    };


    return (
            <div className="w-auto mx-auto">
                {!label?null: <label htmlFor="select" className="font-semibold block py-2">
                    {label}
                </label>}

                <div className="">
                    <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                        <input
                            value={selectedOption}
                            name="select"
                            id="select"
                            className="px-4 appearance-none outline-none text-gray-800 w-full"
                            // checked
                            onChange={handleInputChange}
                            placeholder={placeholder}
                        />

                        <button
                            onClick={clearSelectField}
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                        >
                            <svg
                                className="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <button
                            onClick={toggleShowMore}
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                        >
                        {/*<label*/}
                        {/*    htmlFor="show_more"*/}
                        {/*    className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"*/}
                        {/*>*/}

                            <svg
                                className="w-4 h-4 mx-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        {/*</label>*/}
                        </button>
                    </div>

                    <input
                        type="checkbox"
                        name="show_more"
                        id="show_more"
                        className="hidden peer"
                        checked={showMore}
                    />
                    <div className={`absolute rounded shadow bg-white overflow-hidden ${showMore ? 'peer-checked:flex' : 'hidden'} flex-col mt-1 border border-gray-200`}>

                        {testItems.map((item, index)=><OptionItem value={item} key={index} handleClick={handleOptionSelect}/>)}

                    </div>
                </div>
            </div>
    );
}

export default SelectInput;

interface OptionItemProps {
    value:string
    handleClick: (value: string)=>void
}
const OptionItem:React.FC<OptionItemProps> = (props) => {
    const {value, handleClick} = props
    return(
        <div className="cursor-pointer group border-t" onClick={()=>handleClick(value)}>
            <span className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">{value}</span>
        </div>
    )
}
