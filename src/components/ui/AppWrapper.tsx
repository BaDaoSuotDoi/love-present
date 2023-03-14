import { HiOutlineClipboardCopy, HiOutlineDuplicate } from 'react-icons/hi';
import { BsSkipForward } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useEffect, ReactElement, useRef } from 'react';
import MenuContextHook from '@/store/menuContext/hooks';
import { MenuContextType } from '@/store/menuContext/slice';
import MenuContextFunction from '@/store/menuContext/functions';


const MenuContext = () => {
    const menuContext = MenuContextHook.useMenuContext();

    return (
        <>
            {menuContext.isOpen && menuContext.type === MenuContextType.sliceScreen && 
            <div className='w-64 absolute bg-blue-800 ' style={{
                left: menuContext.x,
                top: menuContext.y
            }}>
                <div className='flex items-center'>
                    <HiOutlineDuplicate />
                    <div>Duplicate slide</div>
                </div>
                <div className='flex'>
                    <HiOutlineClipboardCopy />
                    <div>Copy to another presentation</div>
                </div>
                <div className='flex'>
                    <BsSkipForward />
                    <div>Skip slide</div>
                </div>

                <div className='flex'>
                    <GrPowerReset />
                    <div>Reset slide</div>
                </div>
                <div className='flex'>
                    <RiDeleteBin5Line />
                    <div>Delete slide</div>
                </div>
            </div>}
        </>
    )
}



const AppWrapper = ({ children }: { children: ReactElement }) => {
    const init = useRef<boolean>(false);

    useEffect(() => {
        if (!init.current){
            init.current = true;
            document.addEventListener('contextmenu', (e) => {
                const element = document.elementFromPoint(e.clientX, e.clientY)
                if (element) {
                    const sliceScreenElement = element.closest("#sliceScreen");
                    if (sliceScreenElement) {
                        e.preventDefault()
                        MenuContextFunction.setMenuContext({
                            x: e.clientX,
                            y: e.clientY,
                            isOpen: true,
                            type: MenuContextType.sliceScreen
                        })
                    } else {
                        MenuContextFunction.setMenuContext({
                            x: e.clientX,
                            y: e.clientY,
                            isOpen: false,
                            type: MenuContextType.default
                        })
                    }
                }
            })

            document.addEventListener('mousedown', (e)=>{
                const element = document.elementFromPoint(e.clientX, e.clientY)
                if (element) {
                    const sliceScreenElement = element.closest("#slideScreenMenu");
                    if (sliceScreenElement) {
                        return;
                    } 
                }
                MenuContextFunction.toggleMenu(false)
            })
        }
    }, [])

    return (
        <div className="w-full h-full">
            {children}
            <MenuContext/>
        </div>
    )
}

export default AppWrapper