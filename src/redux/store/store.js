
import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../reducer.js/categorySlice"
import brandSlice from "../reducer.js/brandSlice"
import supCategorySlice from "../reducer.js/supCategorySlice"
import ProductsSlice from '../reducer.js/productSlice';
import authSlice from "../reducer.js/authSlice";
import rateSlice from "../reducer.js/rateSlice";

export const storeCounter = configureStore({
    reducer: {
        categorysDate: categorySlice,
        brandDate: brandSlice,
        supCategorysDate: supCategorySlice,
        ProductsDate: ProductsSlice,
        authData: authSlice,
        rateData: rateSlice
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['auth/creatUser/rejected', 'auth/loginUser/rejected', 'auth/forgetPassword/rejected', 'auth/creatUser/fulfilled', 'auth/loginUser/fulfilled', 'auth/forgetPassword/fulfilled'],
                // Ignore these field paths in all actions
                ignoredPaths: ['authData.creatUser', 'authData.loginUser', 'authData.forgetPassword', 'authData.verifyCode'],
            },
        }),

}
)