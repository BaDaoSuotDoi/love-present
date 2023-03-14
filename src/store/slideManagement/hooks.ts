import { useSelector } from "react-redux"
import { AppState } from "../store"

const useSlideTypeIdPreview = ()=>{
    return useSelector((state: AppState) => {
        return state.slideManagement.slideTypeIdPreview
    })
    
}

const useSlideList = ()=>{
    return useSelector((state: AppState) => state.slideManagement.slides.map(slide => {
        return {
            id: slide.id,
            type: slide.type,
            position: slide.position,
            options: []
        }
    }))
}


const useSlideActive = ()=>{
    return useSelector((state: AppState)=>{
        const slides = state.slideManagement.slides;
        if(slides.length === 0){
            return null;
        }
        return slides[state.slideManagement.slideActiveIndex]
    })
}

const SlideManagementHook = {
    useSlideTypeIdPreview,
    useSlideList,
    useSlideActive
}

export default SlideManagementHook