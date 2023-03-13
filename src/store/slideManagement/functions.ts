import { store } from "../store"
import { addNewSlide, setSildeTypeIdPreview } from "./slice"

const changeSildeTypeIdPreview = (slideId: number)=>{
    store.dispatch(setSildeTypeIdPreview(slideId))
}


const addSlide = (slideTypeId: number) => {
    store.dispatch(addNewSlide(slideTypeId))
}


const SlideManagementFunction = {
    changeSildeTypeIdPreview,
    addSlide
}

export default SlideManagementFunction;