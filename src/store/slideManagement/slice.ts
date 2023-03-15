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
    slideActiveId: number,
    slideTypePreview: SlidePreview | null
    
}

const initialState: SlideManagementType = {
    slides: [],
    slideActiveId: 0,
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
        setSlideActiveId(state, action: { payload: number }) {
            state.slideActiveId = action.payload
        },
        addNewSlide(state, action: { payload: number }){
            state.slideTypePreview = null;
            const slideLen = state.slides.length;
            // update after fetch api
            state.slideActiveId = slideLen;
            const newSlide = createInitSlide(action.payload);
            newSlide.id = slideLen;
            newSlide.position = slideLen;
            state.slides.push(newSlide);
       },
        updateSlide(state, action: {
            payload: {
                values: {
                    [lable: string]: any
                },
                slideId: number
            } []}){
            const data = action.payload;
            const slides = state.slides.map(slide =>({...slide}));
            for(const change of data){
                for (const slide of slides) {
                    if(change.slideId === slide.id){
                        const values = change.values;
                        for (const key of Object.keys(values)) {
                            //@ts-ignore
                            slide[key] = values[key];
                        }
                    }
                }
            }
            state.slides = slides
        }
    }
})

export const {
    setSildeTypePreview,
    setSlideActiveId,
    addNewSlide,
    updateSlide
} = SlideManagementSlice.actions;

export default SlideManagementSlice.reducer;