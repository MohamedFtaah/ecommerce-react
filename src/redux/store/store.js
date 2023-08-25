
import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../reducer.js/categorySlice"
import brandSlice from "../reducer.js/brandSlice"
import supCategorySlice from "../reducer.js/supCategorySlice"
import ProductsSlice from '../reducer.js/productSlice';
import authSlice from "../reducer.js/authSlice";

export const storeCounter = configureStore({
    reducer: {
        categorysDate: categorySlice,
        brandDate: brandSlice,
        supCategorysDate: supCategorySlice,
        ProductsDate: ProductsSlice,
        authData: authSlice
    }

}
)