import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const creatUser = createAsyncThunk('auth/creatUser', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertData('/api/v1/auth/signup', data)
        return res
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertData('/api/v1/auth/login', data)
        return res
    } catch (err) {
        return rejectWithValue(err)
    }
})



export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertData('/api/v1/auth/forgotPasswords', data)
        return res
    } catch (err) {
        return rejectWithValue(err)
    }
})


export const verifyCode = createAsyncThunk('auth/verifyCode', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useInsertData('/api/v1/auth/verifyResetCode', data)
        return res
    } catch (err) {
        return rejectWithValue(err)
    }
})



export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await useUpdateData('/api/v1/auth/resetPassword', data)
        return res
    } catch (err) {
        return rejectWithValue(err)
    }
})



const initialState = {
    creatUser: [],
    loginUser: [],
    verifyCode: [],
    resetPassword: [],
    forgetPassword: [],
    isLioding: false

}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        //creatProducts
        [creatUser.pending]: (state, action) => {

        }
        ,
        [creatUser.fulfilled]: (state, action) => {
            state.creatUser = action.payload
        },
        [creatUser.rejected]: (state, action) => {
            state.creatUser = action.payload
        },
        // loginUser
        [loginUser.pending]: (state, action) => {
        }
        ,
        [loginUser.fulfilled]: (state, action) => {
            state.loginUser = action.payload
        },
        [loginUser.rejected]: (state, action) => {
            state.loginUser = action.payload
        },
        // forgetPassword
        [forgetPassword.pending]: (state, action) => {

        }
        ,
        [forgetPassword.fulfilled]: (state, action) => {
            state.forgetPassword = action.payload
            console.log(action.payload);
        },
        [forgetPassword.rejected]: (state, action) => {
            state.forgetPassword = action.payload
            console.log(action.payload);

        },

        // verifyCode

        [verifyCode.pending]: (state, action) => {

        }
        ,
        [verifyCode.fulfilled]: (state, action) => {
            state.verifyCode = action.payload
            console.log(action.payload);
        },
        [verifyCode.rejected]: (state, action) => {
            state.verifyCode = action.payload
            console.log(action.payload);

        },
        // resetPassword
        [resetPassword.pending]: (state, action) => {

        }
        ,
        [resetPassword.fulfilled]: (state, action) => {
            state.resetPassword = action.payload
            console.log(action.payload);
        },
        [resetPassword.rejected]: (state, action) => {
            state.resetPassword = action.payload
            console.log(action.payload);

        },
    }
}
)
export default authSlice.reducer