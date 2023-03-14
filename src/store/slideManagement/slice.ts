import { createInitSlide } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";

export type SlideOption = {
    id: number,
    data: string,
    image?: string,
}

export type Slide = {
    id: number,
    type: number,
    question?: string,
    options: any[],
    position: number,
    backgroundImage?: string,
    extras?: any,
}

export type SlideManagementType = {
    slides: Slide[],
    slideActiveIndex: number,
    slideTypeIdPreview: number
    
}

export const EMPTY_PREVIEW = -1;

const initialState: SlideManagementType = {
    slides: [],
    slideActiveIndex: 0,
    slideTypeIdPreview: EMPTY_PREVIEW
};

export const SlideManagementSlice = createSlice({
    name: 'slideManagement',
    initialState,
    reducers: {
        setSildeTypeIdPreview(state, action: { payload: number }){
            state.slideTypeIdPreview = action.payload
       },
        setSlideActiveIndex(state, action: { payload: number }) {
            console.log({ index: action.payload })
            state.slideActiveIndex = action.payload
        },
        addNewSlide(state, action: { payload: number }){
            state.slideTypeIdPreview = EMPTY_PREVIEW;
            const slideLen = state.slides.length;
            state.slideActiveIndex = slideLen;
            const newSlide = createInitSlide(action.payload);
            newSlide.id = slideLen;
            newSlide.position = slideLen;
            state.slides.push(newSlide);
       },
        setSlides(state, action: { payload: Slide[] }){
            state.slides = action.payload;
        }
    }
})

export const {
    setSildeTypeIdPreview,
    setSlideActiveIndex,
    addNewSlide,
    setSlides,
} = SlideManagementSlice.actions;

export default SlideManagementSlice.reducer;