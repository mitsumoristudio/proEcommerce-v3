
import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./features/slices/apiSlice";
import authSliceReducer from "./features/slices/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
export default store;