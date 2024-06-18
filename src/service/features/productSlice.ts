import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createProductEndpoint, getAllProductsEndpoint, getProductByIdEndpoint } from "../api/apiConfig";
import { IProduct, IProductCreate } from "../../models/Produdct";
import { toast } from "react-toastify";

type ProductState = {
    loading: boolean;
    products: IProduct[] | null;
    product: IProduct | null;
    createProduct: IProductCreate | null;
    error: string | unknown;
    success: boolean;
};

const initialState: ProductState = {
    loading: false,
    products: null,
    product: null,
    createProduct: null,
    error: null,
    success: false,
};

export const getAllProducts = createAsyncThunk<IProduct[], void>(
    'products/getAllProducts',
    async (_, thunkAPI) => {
        try {
            const token = sessionStorage.getItem('suame88');
            const response = await axios.get(getAllProductsEndpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const getProductById = createAsyncThunk<IProduct, { id: number }>(
    'products/getProductById',
    async (data, thunkAPI) => {
        const { id } = data;
        try {
            const token = sessionStorage.getItem('suame88');
            const response = await axios.get(`${getProductByIdEndpoint}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.errorMessages || 'Unknown error',
            );
        }
    },
);

export const createProduct = createAsyncThunk<IProductCreate, Object>(
    'products/createProduct',
    async (product, thunkAPI) => {
        try {
            const token = sessionStorage.getItem('suame88');
            const response = await axios.post(
                createProductEndpoint,
                product,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success('Create Successfully!');
            return response.data.data;
        } catch (error: any) {
            toast.error('Create Failed!');
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getProductById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getProductById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.createProduct = action.payload;
            state.success = true;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    },
});

export const { setError } = productSlice.actions;
export default productSlice.reducer;
