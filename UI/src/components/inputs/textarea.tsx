import React from 'react';

interface TextAreaInputProps {
    label: string
}
const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
    const {label} = props
    return (
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm mb-2 font-normal text-black">{label}</label>
            <textarea id="description"
                      rows={2}
                      className="block p-2.5  text-sm text-black
                        rounded-lg bg-gray-50 border border-gray-600
                        focus:ring-blue-400 focus:border-blue-400
                        placeholder-gray-400"
                      placeholder="Write description...">

          </textarea>
        </div>
    )
}

export default TextAreaInput