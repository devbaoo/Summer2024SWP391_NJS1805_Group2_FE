import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../api/customAxios";
import { IVoucher } from "../../models/Voucher";

type VoucherState = {
    loading: boolean;
    vouchers: IVoucher[] | null;
    voucher: IVoucher | null;
    error: string | unknown;
    success: boolean;
    search: string;
};

const initialState: VoucherState = {
    loading: false,
    vouchers: null,
    voucher: null,
    error: null,
    success: false,
    search: '',
};

export const getAllVouchers = createAsyncThunk<IVoucher[], void>(
    'vouchers/getAllVouchers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.post('/vouchers/filter',{});
            return response.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const createVoucher = createAsyncThunk<any ,any>(
    'vouchers/createVoucher',
    async (voucher, thunkAPI) => {
        try {
            const response = await axios.post(
                '/vouchers',
                voucher
            );
            toast.success('Create Successfully!');
            return response.data.data;
        } catch (error: any) {
            toast.error('Create Failed!');
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const voucherSlice = createSlice({
    name: 'vouchers',
    initialState,
    reducers: {
        setSearchVoucher: (state, action) => {
            state.search = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllVouchers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllVouchers.fulfilled, (state, action) => {
            state.loading = false;
            state.vouchers = action.payload;
        });
        builder.addCase(getAllVouchers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { setSearchVoucher } = voucherSlice.actions;
export default voucherSlice.reducer;
