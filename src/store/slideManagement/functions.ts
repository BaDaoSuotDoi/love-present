import { store } from "../store"
import { addNewSlide, setSildeTypePreview, setSlideActiveIndex, setSlides, Slide } from "./slice"

const changeSildeTypePreview = (slide: { slideTypeId: number, visualType?: number }|null)=>{
    store.dispatch(setSildeTypePreview(slide))
}

const changeSildeActionIndex = (postion: number) => {
    console.log({ postion })
    store.dispatch(setSlideActiveIndex(postion))
}



const addSlide = (slideTypeId: number) => {
    console.log("ADD", slideTypeId)
    store.dispatch(addNewSlide(slideTypeId))
}

const updateSlides = (slides: Slide[])=>{
    store.dispatch(setSlides(slides))
}


const SlideManagementFunction = {
    changeSildeTypePreview,
    changeSildeActionIndex,
    addSlide,
    updateSlides
}

export default SlideManagementFunction;