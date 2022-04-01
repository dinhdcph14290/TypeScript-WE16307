import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'

const ProductAdd = () => {
    const { register, handleSubmit, formState : {errors}} = useForm();
    const dispath = useDispatch();

    const onSubmit = (data) =>{
        console.log(data);
        dispath(addProduct(data))
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} placeholder='Ten san pham'/>
        <input type="number" {...register('price')} placeholder='Gia san pham'/>
        <button>Them san pham</button>
    </form>
    )
}

export default ProductAdd