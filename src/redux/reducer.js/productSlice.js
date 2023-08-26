import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../Components/Api/baseUrl";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

export const getAllProducts = createAsyncThunk('products/getAll', async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await baseUrl.get(url)
        return res.data
    }

    catch (err) {
        console.log(err)
        return rejectWithValue(err)

    }
})
export const getOneProducts = createAsyncThunk('products/getOne', async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await baseUrl.get(url)
        return res.data
    }

    catch (err) {
        console.log(err)
        return rejectWithValue(err)

    }
})
export const getProductsPyCategory = createAsyncThunk('products/getPyCategory', async (url) => {
    const res = await baseUrl.get(url)
    return res.data

})

export const creatProducts = createAsyncThunk('products/postData', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertDataWithImage('/api/v1/products', formData)
        return res
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)

    }
})

export const deleteProduct = createAsyncThunk('products/deleteData', async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        console.log(url);
        const res = await useDeleteData(`/api/v1/products/${url}`)
        return res
    } catch (err) {
        return rejectWithValue(err)

    }
})




export const UpdateProducts = createAsyncThunk('products/postData', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useUpdateDataWithImage(`/api/v1/products/${data.url}`, data.formData)
        return res
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)

    }
})

const initialState = {
    products: [],
    deleteProduct: [],
    OneProducts: [],
    productsPyCategory: [],
    randomKay: 0,
    isLioding: false
}
const ProductsSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        //getAllProducts
        [getAllProducts.pending]: (state, action) => {
            state.isLioding = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.products = action.payload
            state.isLioding = false

        },
        [getAllProducts.rejected]: (state, action) => {

            state.products = action.payload
            state.isLioding = false

        },   //getOneProducts
        [getOneProducts.pending]: (state, action) => {
            state.isLioding = true
        },
        [getOneProducts.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.OneProducts = action.payload
            state.isLioding = false

        },
        [getOneProducts.rejected]: (state, action) => {

            state.OneProducts = action.payload
            state.isLioding = false

        },
        //getProductsPyCategory
        [getProductsPyCategory.pending]: (state, action) => {
            state.isLioding = true
        },
        [getProductsPyCategory.fulfilled]: (state, action) => {
            console.log(action.payload)
            console.log(state.productsPyCategory)
            state.productsPyCategory = action.payload
            state.randomKay = Math.floor(Math.random() * action.payload.data.length)

            state.isLioding = false

        },
        [getProductsPyCategory.rejected]: (state, action) => {
            state.productsPyCategory = action.payload
            state.isLioding = false
            state.randomKay = Math.floor(Math.random() * action.payload.data.length)

        },

        //creatProducts
        [creatProducts.pending]: (state, action) => {
            console.log(state.isLioding)
            state.isLioding = true
        }
        ,
        [creatProducts.fulfilled]: (state, action) => {
            console.log('don')
            state.products = action.payload
            state.isLioding = false
        },
        [creatProducts.rejected]: (state, action) => {
            state.products = action.payload
            state.isLioding = false
        },
        //deleteProduct
        [deleteProduct.pending]: (state, action) => {
            console.log(state.isLioding)
            state.isLioding = true
        }
        ,
        [deleteProduct.fulfilled]: (state, action) => {
            console.log('don')
            state.deleteProduct = action.payload
            state.isLioding = false
        },
        [deleteProduct.rejected]: (state, action) => {
            state.deleteProduct = action.payload
            state.isLioding = false
            console.log(action.payload)

        },
        //UpdateData
        [UpdateProducts.pending]: (state, action) => {
            console.log(state.isLioding)
            state.isLioding = true
        }
        ,
        [UpdateProducts.fulfilled]: (state, action) => {
            console.log('don')
            state.products = action.payload
            state.isLioding = false
        },
        [UpdateProducts.rejected]: (state, action) => {
            state.products = action.payload
            state.isLioding = false
        },
    }
}
)
export default ProductsSlice.reducer
