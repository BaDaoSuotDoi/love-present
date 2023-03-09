import { useState } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import OutsideHoverDetect from "../ui/OutsideHoverDetect"

const DescriptionUse = ({message}:{message: string})=>{
    const [isShowMessage, setIsShowMessage] = useState(false);

    return (
        <div className="relative bg-red-300 flex-col ">
            {isShowMessage && <div className="absolute z-10 w-96 bg-blue-500 -left-48 flex bottom-6 ">{message}</div>}
            <OutsideHoverDetect outsideFunc={()=>{
                setIsShowMessage(false)
            }}>
                <AiOutlineQuestionCircle onMouseOver={()=>{
                    setIsShowMessage(true)
                }} />
            </OutsideHoverDetect>
        </div>
    )
}

export default DescriptionUse