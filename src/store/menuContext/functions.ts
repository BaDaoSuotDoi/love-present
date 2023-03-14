import { toggle, MenuContext, set } from "./slice"
import { store } from "../store";

const setMenuContext = (menuContext: MenuContext)=>{
    store.dispatch(set(menuContext))
}

const toggleMenu = (isClose?: boolean) =>{
    store.dispatch(toggle(isClose))
}

const MenuContextFunction = {
    setMenuContext,
    toggleMenu
}

export default MenuContextFunction