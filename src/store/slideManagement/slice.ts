import { createInitSlide } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";

export type SlideOption = {
    id: number,
    data: string,
    image?: string,
}
export const SlideTypePreviewDefault = 1;
export const SlideTypePreviewStatic  = 0;

export type Slide = {
    id: number,
    type: number,
    question?: string,
    options: any[],
    position: number,
    visualType?: number,
    backgroundImage?: string,
    extras?: any,
}

export type SlidePreview = {
    id: number,
    visualType: number
}

export type SlideManagementType = {
    slides: Slide[],
    slideActiveIndex: number,
    slideTypePreview: SlidePreview | null
    
}

const initialState: SlideManagementType = {
    slides: [],
    slideActiveIndex: 0,
    slideTypePreview: null
};

export const SlideManagementSlice = createSlice({
    name: 'slideManagement',
    initialState,
    reducers: {
        setSildeTypePreview(state, action: { payload: {
            slideTypeId: number,
            visualType?: number
        }|null }){
            if (!action.payload){
                state.slideTypePreview = null
            }else{
                const { slideTypeId, visualType } = action.payload;
                state.slideTypePreview = {
                    id: slideTypeId,
                    visualType: visualType !== undefined ? visualType : SlideTypePreviewDefault
                }
            }
       },
        setSlideActiveIndex(state, action: { payload: number }) {
            state.slideActiveIndex = action.payload
        },
        addNewSlide(state, action: { payload: number }){
            state.slideTypePreview = null;
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
    setSildeTypePreview,
    setSlideActiveIndex,
    addNewSlide,
    setSlides,
} = SlideManagementSlice.actions;

export default SlideManagementSlice.reducer;