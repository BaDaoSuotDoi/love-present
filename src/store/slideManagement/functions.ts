import { store } from "../store"
import { addNewSlide, setSildeTypeIdPreview, setSlideActiveIndex, setSlides, Slide } from "./slice"

const changeSildeTypeIdPreview = (slideId: number)=>{
    store.dispatch(setSildeTypeIdPreview(slideId))
}

const changeSildeActionIndex = (postion: number) => {
    console.log({ postion })
    store.dispatch(setSlideActiveIndex(postion))
}



const addSlide = (slideTypeId: number) => {
    store.dispatch(addNewSlide(slideTypeId))
}

const updateSlides = (slides: Slide[])=>{
    store.dispatch(setSlides(slides))
}
const SlideManagementFunction = {
    changeSildeTypeIdPreview,
    changeSildeActionIndex,
    addSlide,
    updateSlides
}

export default SlideManagementFunction;