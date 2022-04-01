import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [
            {"id": 1, "name": "Product A", "price": 30000},
            {"id": 2, "name": "Product B", "price": 30000}
        ]
    },
    reducers: {
        addProduct(state,action){
            console.log('action', action);
        }
    }
});
export const {addProduct} = productSlice.actions;
export default productSlice.reducer