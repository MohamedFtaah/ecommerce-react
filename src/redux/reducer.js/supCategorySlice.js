import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../Components/Api/baseUrl";
import { useInsertData } from "../../hooks/useInsertData";

export const getArryOfSupCategoryPyId = createAsyncThunk('supCategorys/getArry', async (arry) => {
    const res = arry.map(async (url) => { return await baseUrl.get(`/api/v1/subcategories/${url}`) })
    console.log(res);
    return res

})
export const creatSupCategory = createAsyncThunk('supCategorys/postData', async (formData) => {
    await useInsertData('/api/v1/subcategories', formData)
})

export const getSupCategoryPyCategory = createAsyncThunk('supCategorys/getAll', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})


const initialState = {
    supCategorys: [],
    ArryOfSupCategory: [],
    isLioding: false
}
const supCategorySlice = createSlice({

    name: 'supCategorys',
    initialState,
    reducers: {

    },
    extraReducers: {
        //
        [getArryOfSupCategoryPyId.pending]: (state, action) => {
            console.log(action)
        },
        [getArryOfSupCategoryPyId.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.ArryOfSupCategory = action.payload
        },
        [getArryOfSupCategoryPyId.rejected]: (state, action) => {
            console.log(action)
        },

        //
        [creatSupCategory.pending]: (state, action) => {
            console.log(state.isLioding)
            state.isLioding = true
        }
        ,
        [creatSupCategory.fulfilled]: (state, action) => {
            console.log('don')
            state.isLioding = false
        },
        [creatSupCategory.rejected]: (state, action) => {
            state.isLioding = false
            console.log(action.error.message)
        },
        //
        [getSupCategoryPyCategory.pending]: (state, action) => {
            console.log(action)
        },
        [getSupCategoryPyCategory.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.supCategorys = action.payload
        },
        [getSupCategoryPyCategory.rejected]: (state, action) => {
            console.log(action)
        },
    }
}
)
export default supCategorySlice.reducer
