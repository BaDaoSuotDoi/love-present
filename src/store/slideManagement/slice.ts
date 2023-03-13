import { createSlice } from "@reduxjs/toolkit";

export type SlideOption = {
    id: number,
    data: string,
    image?: string,
}

export type Slide = {
    id: number,
    question: string,
    options: [],
    position: number,
    backgroundImage?: string,
    extras?: any,
}

export type SlideManagementType = {
    slides: Slide[],
    slideIdActive: number,
    slideTypeIdPreview: number
    
}

export const EMPTY_PREVIEW = -1;

const initialState: SlideManagementType = {
    slides: [],
    slideIdActive: 0,
    slideTypeIdPreview: EMPTY_PREVIEW
};

export const SlideManagementSlice = createSlice({
    name: 'slideManagement',
    initialState,
    reducers: {
        setSildeTypeIdPreview(state, action: { payload: number }){
            state.slideTypeIdPreview = action.payload
       },
        addNewSlide(state, action: { payload: number }){
            state.slideTypeIdPreview = EMPTY_PREVIEW;
            state.slides.push({
                id: action.payload,
                question: "",
                position: state.slides.length,
                options: []
            })
       }
    }
})

export const {
    setSildeTypeIdPreview,
    addNewSlide
} = SlideManagementSlice.actions;

export default SlideManagementSlice.reducer;