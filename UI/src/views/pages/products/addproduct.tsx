import React from 'react';
import InputField, {CustomInputField} from "../../../components/inputs/input.tsx";
import Button from "../../../components/buttons/button.tsx";
import TextAreaInput from "../../../components/inputs/textarea.tsx";
import SelectInput from "../../../components/inputs/select.tsx";

const AddProduct:React.FC = () => {
    return(
        <div className="p-5">
            <form>
                <div className="grid gap-6 mb-6 ">
                    <InputField label={"Name of Product"}/>
                    <SelectInput label={"Unit of Sell"}/>
                    <CustomInputField label={"Sell Price"}/>
                    <TextAreaInput label={"Description"}/>
                    <Button title={"Save Product"}/>
                </div>
            </form>
        </div>
    )
}

export default AddProduct