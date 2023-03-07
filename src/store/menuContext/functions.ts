import { close, MenuContext, set } from "./slice"
import { useDispatch } from "react-redux";
import { store } from "../store";

const setMenuContext = (menuContext: MenuContext)=>{
    store.dispatch(set(menuContext))
}

const closeMenu = (isClose: boolean) =>{
    store.dispatch(close(isClose))
}

const MenuContextFunction = {
    setMenuContext,
    closeMenu
}

export default MenuContextFunction