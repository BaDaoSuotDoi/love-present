import { useSelector } from "react-redux";
import { AppState } from "../store";

const useMenuContext = ()=>{
    return useSelector((state: AppState)=>{
        return state.menuContext
    })
}

const MenuContextHook = {
    useMenuContext
}

export default MenuContextHook