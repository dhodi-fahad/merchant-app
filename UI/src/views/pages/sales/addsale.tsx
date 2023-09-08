import React, {useState} from 'react';
import InputField from "../../../components/inputs/input.tsx";
import SelectInput from '../../../components/inputs/select/index.tsx'
import {HeadCell} from "../../../components/tables/table.tsx";
import NumberCounterInput from "../../../components/inputs/counter.tsx";
import Button from "../../../components/buttons/button.tsx";
import {FiDelete, FiPlus, FiTrash} from "react-icons/fi"

const AddSale: React.FC = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="px-5 py-20">
            <InputField type="date" label="Date"/>
            <div className="w-60 mb-6 ">
                <SelectInput label="Customer" placeholder="Select Customer" />
            </div>

            <table>
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <HeadCell title="Select Product"/>
                        <HeadCell title="Units"/>
                        <HeadCell title="Quantity"/>
                        <HeadCell title="Unit Price"/>
                        <HeadCell title="Total Amount"/>
                        <HeadCell title="Action"/>
                    </tr>

                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr >
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <SelectInput placeholder="Select product"/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <SelectInput placeholder="Select unit"/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <NumberCounterInput handleOnChange={setValue}/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            3000
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            {value*3000}
                        </td>

                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <Button icon={<FiTrash/>} />
                        </td>

                    </tr>
                    <tr >
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <SelectInput placeholder="Select product"/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <SelectInput placeholder="Select unit"/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <NumberCounterInput handleOnChange={setValue}/>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            3000
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            {value*3000}
                        </td>

                        <td className="px-4 py-4 text-sm  whitespace-nowrap">
                            <Button icon={<FiTrash/>} />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <Button icon={<FiPlus/>} title="Add Another Item"/>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="px-4 py-4 font-medium whitespace-nowrap"> Total Amount</td>

                        <td className="flex items-center justify-center bg-gray-100 px-10 py-5 rounded m-1 font-black">
                            <span>
                                {value*4000}
                            </span>
                        </td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default AddSale