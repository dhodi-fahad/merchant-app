import {ChangeEvent, useEffect, useState} from 'react';

interface CounterProps {
    handleOnChange:(value:number) => void
}

const NumberCounterInput: React.FC<CounterProps> = (props) => {
    const [value, setValue] = useState<number>(0);
    const {handleOnChange} = props
    useEffect(()=>{
        handleOnChange(value)
    },[value])

    const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        if (+value>-1){
            setValue(+value)
        }
    }


    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleIncrement = () => {
        setValue(value + 1);
    };

    return (
        <div className=" h-10 w-32">
            {/*<label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">*/}
            {/*    Counter Input*/}
            {/*</label>*/}
            <div className="flex flex-row h-10 w-full rounded  bg-transparent mt-1 border border-gray-200 ">
                <button onClick={handleDecrement} className="bg-white text-gray-600 hover:text-gray-700 hover:bg-white border-gray-400  h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-white  text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                    name="custom-input-number"
                    value={value}
                    onChange={handleQtyChange}

                />
                <button onClick={handleIncrement} className="bg-white  text-gray-600 hover:text-gray-700 hover:bg-white h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    );
}

export default NumberCounterInput;