import { useSelector } from "react-redux"
import { AppState } from "../store"

const useSlideTypeIdPreview = ()=>{
    return useSelector((state: AppState) => {
        return state.slideManagement.slideTypeIdPreview
    })
    
}

const SlideManagementHook = {
    useSlideTypeIdPreview
}

export default SlideManagementHook