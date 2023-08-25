import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../Components/Api/baseUrl";
import { useInsertDataWithImage } from "../../hooks/useInsertData";




export const getAllCategorys = createAsyncThunk('categorys/getAll', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})


export const getOneCategorys = createAsyncThunk('categorys/getOne', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})

// export const creatCategorys = createAsyncThunk('categorys/postData', async (formData) => {
//     const res = await baseUrl.post('/api/v1/categories', formData, { headers: { 'Content-Type': 'multipart/from-data' } })
// }
// )
export const creatCategory = createAsyncThunk('categorys/postData', async (formData, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertDataWithImage('/api/v1/categories', formData)
        return res
    } catch (err) {
        // console.log(err)
        return rejectWithValue(err)
    }
})

const initialState = {
    categorys: [],
    oneCategorys: [],
    isLioding: false,
}
const categorySlice = createSlice({

    name: 'categorys',
    initialState,
    reducers: {

    },
    extraReducers: {
        //getAllCategorys
        [getAllCategorys.pending]: (state, action) => {
            console.log(action)
        },
        [getAllCategorys.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.categorys = action.payload
        },
        [getAllCategorys.rejected]: (state, action) => {
            console.log(action)
        },

        //creatCategory
        [creatCategory.pending]: (state, action) => {

            console.log(state.isLioding)
            state.isLioding = true
        },

        [creatCategory.fulfilled]: (state, action) => {
            state.categorys = action.payload
            state.isLioding = false
        },
        [creatCategory.rejected]: (state, action) => {
            state.categorys = action.payload
            state.isLioding = false
        },
        // getOneCategorys
        [getOneCategorys.pending]: (state, action) => {
        },
        [getOneCategorys.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.oneCategorys = action.payload
        },
        [getOneCategorys.rejected]: (state, action) => {
        },
    }
}
)
export default categorySlice.reducer
