import { store } from "../store"
import { addNewSlide, setSildeTypePreview, setSlideActiveId, Slide, updateSlide } from "./slice"

const changeSildeTypePreview = (slide: { slideTypeId: number, visualType?: number }|null)=>{
    store.dispatch(setSildeTypePreview(slide))
}

const changeSildeActionId = (slideId: number) => {
    store.dispatch(setSlideActiveId(slideId))
}

const addSlide = (slideTypeId: number) => {
    store.dispatch(addNewSlide(slideTypeId))
}

const hanldeUpdateSlides = (data:{
    values: {
        [lable: string]: any
    },
    slideId: number
}[])=>{
    store.dispatch(updateSlide(data))
}


const SlideManagementFunction = {
    changeSildeTypePreview,
    changeSildeActionId,
    addSlide,
    hanldeUpdateSlides
}

export default SlideManagementFunction;