import React from 'react';

interface InputFieldProps {
    label:string

}
const InputField: React.FC<InputFieldProps> = (props) => {
    const {label} = props
    return(
        <div className="mb-6 items-start">
            <label htmlFor="default-input" className="block mb-6 text-sm font-normal text-black">{label}</label>
            <input type="text" id="default-input"  className="bg-gray-50 border border-gray-600 text-black text-sm
            rounded-lg focus:ring-gray-400 focus:border-gray-400 block  p-2.5
            placeholder-gray-400 " placeholder={label}/>
        </div>
    )
}

export default InputField

export const CustomInputField: React.FC<InputFieldProps> = (props) => {
    const {label} = props
    return (
        <div >
            <label className="block mb-2 text-sm font-normal text-black" htmlFor="default_size">{label}</label>
            <div className="flex w-fit border  border-gray-600 rounded-lg focus-within:border-gray-400 focus-within:ring-gray-400">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                UGX
              </span>
                <input type="number"
                       id="website-admin"
                       className="bg-gray-50 outline-0 rounded-lg text-black text-sm p-2.5 placeholder-gray-400"
                       placeholder={label}/>
            </div>
        </div>
    )
}
