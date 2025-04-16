
import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./features/slices/apiSlice";
import authSliceReducer from "./features/slices/authSlice";
import cartSliceReducer from "./features/slices/cartSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cartSlice: cartSliceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
export default store;