import { useEffect, useRef, useState } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import OutsideHoverDetect from "../ui/OutsideHoverDetect"

const DescriptionUse = ({message}:{message: string})=>{
    const [isShowMessage, setIsShowMessage] = useState(false);
    const messageRef = useRef<any>(null);
    const desRef = useRef<any>(null);

    useEffect(()=>{
        const messageEle = messageRef.current;
        const desEle = desRef.current;

        if (messageEle && desEle && isShowMessage){
            const rect = desEle.getBoundingClientRect();

            messageEle.style.top = `${rect.top - messageEle.offsetHeight -10 }px`;
            const offsetLeft = rect.left - messageEle.offsetWidth / 2;
            if(offsetLeft > 0){
                messageEle.style.left = `${offsetLeft}px`;
            }else{
                messageEle.style.left = `${rect.left/2 - 10}px`
            }
        }
    },[isShowMessage])

    return (
       <>
            <div className="relative bg-red-300 flex-col " title="Description" ref={desRef}>
                <OutsideHoverDetect outsideFunc={() => {
                    setIsShowMessage(false)
                }}>
                    <AiOutlineQuestionCircle onMouseOver={() => {
                        setIsShowMessage(true)
                    }} />
                </OutsideHoverDetect>
            </div>
            {isShowMessage && 
            <div 
                ref={messageRef}
                className="fixed z-50 w-96 bg-blue-500 flex min-h-min bottom-6 top-10 left-10 justify-center">
                {message}
            </div>}
       </>
    )
}

export default DescriptionUse