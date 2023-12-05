import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";

export const addRate = createAsyncThunk('rate/addRate', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const ras = await useInsertData('/api/v1/reviews', data)
        return addRate
    } catch (e) {
        return rejectWithValue(e)
    }
})



const initialState = {
    addRate: [],
    isLioding: false,

}

const rateSlice = createSlice(
    {
        name: 'rate',
        initialState,
        reducers: {},
        extraReducers: {
            // addRate
            [addRate.pending]: (state, action) => {
                state.isLioding = true

            },
            [addRate.fulfilled]: (state, action) => {
                state.addRate = action.payload
                state.isLioding = false
            },
            [addRate.rejected]: (state, action) => {
                state.addRate = action.payload
                state.isLioding = false
            }
        }
    }
)
export default rateSlice.reducer