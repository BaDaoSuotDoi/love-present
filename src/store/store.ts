import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { menuContextSlice } from "./menuContext/slice";

export const  store = configureStore({
    reducer: {
        [menuContextSlice.name]: menuContextSlice.reducer,
    },
    devTools: true,
});

const makeStore = () => store
    

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper(makeStore);