import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../Components/Api/baseUrl";
import { useInsertDataWithImage } from "../../hooks/useInsertData";




export const getAllbrand = createAsyncThunk('brand/getAll', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})
export const getOneBrand = createAsyncThunk('brand/getOne', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})
export const creatBrand = createAsyncThunk('brand/postData', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await useInsertDataWithImage('/api/v1/brands', formData)
        return res

    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
}
)
const initialState = {
    brand: [],
    OneBrand: [],
    isLioding: false,

}
const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllbrand.pending]: (state, action) => {
        },
        [getAllbrand.fulfilled]: (state, action) => {
            state.brand = action.payload
        },
        [getAllbrand.rejected]: (state, action) => {
        },
        [creatBrand.pending]: (state, action) => {
            state.isLioding = true
        },
        [creatBrand.fulfilled]: (state, action) => {
            state.brand = action.payload
            state.isLioding = false
        },
        [creatBrand.rejected]: (state, action) => {
            state.brand = action.payload
            state.isLioding = false
        },   // getOneCategorys
        [getOneBrand.pending]: (state, action) => {
        },
        [getOneBrand.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.OneBrand = action.payload
        },
        [getOneBrand.rejected]: (state, action) => {
        },

    }
}
)
export default brandSlice.reducer