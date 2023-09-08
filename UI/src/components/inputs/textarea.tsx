import React, {ChangeEvent} from 'react';

interface TextAreaInputProps {
    label: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
    const {label, name, value, onChange} = props
    return (
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm mb-2 font-normal text-black">{label}</label>
            <textarea id="description"
                      rows={2}
                      className="block p-2.5  text-sm text-black
                        rounded-lg bg-gray-50 border border-gray-600
                        focus:ring-blue-400 focus:border-blue-400
                        placeholder-gray-400"
                      placeholder="Write description..."
                      name={name}
                      value={value}
                      onChange={onChange}/>
        </div>
    )
}

export default TextAreaInput