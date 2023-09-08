import {ChangeEvent, useState} from "react";
import axios from "axios";

interface ProductState {
    product_name: string;
    unit: string;
    price: number; // Change the type to number
    description: string;
}

export const useAddProduct = () => {
    const [state, setState] = useState<ProductState>({
        product_name: "",
        unit: "",
        price: 0,
        description: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]:  name === 'price' ? parseFloat(value) : value,
        });
    }

    const isFormValid = () => {
        // Check if all required fields have values
        return (
            state.product_name.trim() !== "" &&
            state.unit.trim() !== "" &&
            state.price !== 0 &&
            state.description.trim() !== ""
        );
    }

    const submitProduct = async () => {

        if (!isFormValid()) {
            console.error('Form is not valid. Please fill in all required fields.');
            return;
        }

        try {

            const response = await axios.post('YOUR_API_URL', state);
            console.log('Product added successfully', response.data);
            setState({
                product_name: "",
                unit: "",
                price: 0,
                description: ""
            });

        } catch (error) {

            console.error('Error submitting product:', error);
        }
    }

    return {state, handleChange, submitProduct}
}