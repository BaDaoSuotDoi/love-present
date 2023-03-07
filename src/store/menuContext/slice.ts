import { createSlice } from "@reduxjs/toolkit";

export const MenuContextType = {
    default: 0,
    sliceScreen: 1
}

export type MenuContext = {
    isOpen: boolean,
    type: number,
    x: number,
    y: number,
}

const initialState: MenuContext = {
    isOpen: false,
    type: 0,
    x: 0, y: 0
};

export const menuContextSlice = createSlice({
    name: 'menuContext',
    initialState,
    reducers: {
        set(state, action: { payload: MenuContext }) {
            state.isOpen = action.payload.isOpen;
            state.type = action.payload.type;
            state.x = action.payload.x;
            state.y = action.payload.y;
        },
        close(state, action: { payload: boolean }){
            state.isOpen = action.payload;
        }
    }
})

export const {
    set,
    close
} = menuContextSlice.actions;

export default menuContextSlice.reducer;