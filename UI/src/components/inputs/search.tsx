import React, {ReactNode} from 'react'

interface SearchProps {
    value?: string;
    placeholder?: string;
    icon?: ReactNode;
}

const Search: React.FC<SearchProps> = (props) => {
    const {icon, placeholder} = props
    return(
        <div className="w-full md:w-1/2">
            <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {icon?icon:''}
                    </div>
                    <input type="text" id="simple-search"
                           className="bg-white border border-gray-300 text-black text-normal rounded-lg focus:ring-primary-500 focus:border-primary-500 block  pl-10 p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder={placeholder}/>
                </div>
            </form>
        </div>
    )
}

export default Search