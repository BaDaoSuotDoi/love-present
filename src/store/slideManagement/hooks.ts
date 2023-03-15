import { useSelector } from "react-redux"
import { AppState } from "../store"

const useSlideTypePreview = ()=>{
    return useSelector((state: AppState) => {
        return state.slideManagement.slideTypePreview
    })
    
}

const useSlideList = ()=>{
    return useSelector((state: AppState) => state.slideManagement.slides.map(slide => {
        return {
            id: slide.id,
            type: slide.type,
            position: slide.position,
        }
    })).sort((a, b) => {
        return a.position - b.position
    })
}


const useSlideActive = ()=>{
    return useSelector((state: AppState)=>{
        const slides = state.slideManagement.slides;
        for (const slide of slides){
            if (slide.id === state.slideManagement.slideActiveId){
                return slide;
            }
        }
        return null;
    })
}

const SlideManagementHook = {
    useSlideTypePreview,
    useSlideList,
    useSlideActive
}

export default SlideManagementHook