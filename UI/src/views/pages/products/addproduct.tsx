import React from 'react';
import InputField, {CustomInputField} from "../../../components/inputs/input.tsx";
import Button from "../../../components/buttons/button.tsx";
import TextAreaInput from "../../../components/inputs/textarea.tsx";
import SelectInput from "../../../components/inputs/select.tsx";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";
import {useAddProduct} from "./hooks/useAddProduct.ts";


const AddProduct:React.FC = () => {
    const {state, handleChange, submitProduct} = useAddProduct()
    const {product_name, unit, description, price} = state
    const units = [{
        value: "pair",
        id: 1
        },
        {
            value: "bottle",
            id: 2
        }]
    return(
       <>

           <div className="px-5 py-20">
               <div
                   className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4 ">
                   <div
                       className="md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                       <Link to="/add-product">
                           <Button icon={<FiPlus/>} title={"Add Unit"}/>
                       </Link>
                   </div>
                   <div
                       className="md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                       <Link to="/products">
                           <Button title={"Products"}/>
                       </Link>
                   </div>
               </div>
               <form className="">
                   <div className="grid gap-6 mb-6 ">
                       <InputField label="Name of Product" name="product_name" value={product_name} onChange={handleChange}/>
                       <SelectInput label={"Unit of Sell"} name="unit" value={unit} onChange={handleChange} options={units}/>
                       <CustomInputField label="Sell Price" name="price" value={price} onChange={handleChange}/>
                       <TextAreaInput label={"Description"} name="description" value={description} onChange={handleChange}/>
                       <Button title={"Save Product"} handleOnClick={submitProduct}/>
                   </div>
               </form>
           </div>
       </>
    )
}

export default AddProduct
