import { createSlice } from "@reduxjs/toolkit";

export type SlideOption = {
    id: number,
    data: string,
    image?: string,
}

export type SlideType = {
    id: number,
    type: number,
    question: string,
    options: [],
    backgroundImage?: string,
    extras?: any,
}

export type SlideManagementType = {
    slides: SlideType[],
    slideActiveId: number,
    
}


const initialState: SlideManagementType = {
    slides: [],
    slideActiveId: 0
};

export const SlideManagement = createSlice({
    name: 'slides',
    initialState,
    reducers: {
       
    }
})

export const {
  
} = SlideManagement.actions;

export default SlideManagement.reducer;