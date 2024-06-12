import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILogin, ILoginResponse, IRegister, IUser } from "../../models/User";
import { toast } from "react-toastify";
import { loginEndpoint, registerEndpoint } from "../api/apiConfig";
import axios from 'axios';

type AccountState = {
    loading: boolean;
    account: IUser | null;
    registerUser: IRegister | null;
    error: string[] | unknown
    success: boolean
}

const initialState: AccountState = {
    loading: false,
    account: null,
    registerUser: null,
    error: [],
    success: false
};

export const registerUser = createAsyncThunk<IUser, Object>(
    'auth/register-user',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(registerEndpoint, data);
            toast.success('Đăng ký thành công !');
            return response.data;
        } catch (error: any) {
            if (error.response) {
                toast.error(`${error.response.data?.errorMessages}`);
                return thunkAPI.rejectWithValue({
                    error: error.response?.data?.errorMessages,
                });
            }
        }
    },
);

export const loginUser = createAsyncThunk<ILoginResponse, ILogin>(
    'auth/loginUser',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(loginEndpoint, data);
            if (response.data.success) {
                const token = response.data.data.accessToken;
                sessionStorage.setItem('quickServeToken', token);
                toast.success('Đăng nhập thành công !');
                return response.data;
            } else {
                toast.error(`${response.data.message}`);
                return thunkAPI.rejectWithValue(response.data);
            }
        } catch (error: any) {
            toast.error(`${error.response.data.message}`);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const logoutUser = createAsyncThunk<
    ILoginResponse | null,
    string | Object
>('auth/logout-user', async (_, thunkAPI) => {
    try {
        sessionStorage.removeItem('quickServeToken');
        toast.success('Đăng xuất thành công !');
        return null;
    } catch (error: any) {
        toast.error('Đăng xuất không thành công !');
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state) => {
            state.error = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.account = action.payload;
            state.success = true;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.account = action.payload.data;
            state.success = true;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(logoutUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.account = null;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { setError } = authSlice.actions;
export default authSlice.reducer;