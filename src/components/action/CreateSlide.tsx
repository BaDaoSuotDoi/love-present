import { MdOutlineAdd } from "react-icons/md"
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import DescriptionUse from "../items/DescriptionUse";
import { SlideType } from "../controlPanel/ControlPanel";
import ScrollList from "../ui/ScrollList";
import SlideManagementFunction from "@/store/slideManagement/functions";
import OutsideClickDetect from "../ui/OutsideClickDetect";
import { SlideTypePreviewStatic } from "@/store/slideManagement/slice";

const CreateSlide = ()=>{
    const [isClicked, setIsClicked] = useState(false);

    return (
       <OutsideClickDetect outsideFunc={()=>{
            setIsClicked(false);
            SlideManagementFunction.changeSildeTypePreview(null);
       }}>
            <div className="relative">
                <div onClick={() => {
                    if(isClicked){
                        SlideManagementFunction.changeSildeTypePreview(null);
                    }
                    setIsClicked(!isClicked);
                }}>
                    {
                        isClicked
                            ? <button className="bg-gray-600 flex items-center pr-4 pl-3 py-2 rounded hover:bg-gray-500">
                                <RxCross2 className="w-4 h-auto" />
                                <div className="ml-1 font-medium">Cancel</div>
                            </button>
                            : <button className="bg-blue-500 flex items-center pr-4 pl-3 py-2 rounded hover:bg-blue-700">
                                <MdOutlineAdd className="w-6 h-auto" />
                                <div className="ml-1 font-medium">New slide</div>
                            </button>
                    }
                </div>
                <div className="absolute ">
                    {
                        isClicked && (
                            <SlideBoardSelection closeForm={() => { setIsClicked(false)}}/>
                        )
                    }
                </div>
            </div>
       </OutsideClickDetect>
    )
}

const SlideBoardSelection = ({ closeForm }: { closeForm: ()=>void})=>{
    return (
        <div className="w-[30rem] bg-yellow-800 z-50 overflow-hidden h-[45rem]">
            <ScrollList>
                {
                    SlideType.map(group => (
                        <div key={group.groupId} className="ml-3 font-medium my-2">
                            <div className="flex items-center">
                                <div>{group.label}</div>
                                <DescriptionUse message={group.desc} />
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    group.slides.map(slide => (
                                        <div key={slide.id}
                                            onClick={() => { 
                                                SlideManagementFunction.addSlide(slide.id); 
                                                closeForm();
                                            }}
                                            onMouseOver={() => { SlideManagementFunction.changeSildeTypePreview({ slideTypeId: slide.id, visualType: SlideTypePreviewStatic })}}
                                            className="w-32 h-20 border-2 mx-2 my-2 flex flex-col items-center justify-center bg-blue-300 cursor-pointer hover:opacity-80">
                                            <div className="w-6 h-6">{slide.icon}</div>
                                            <div>{slide.label}</div>
                                        </div>
                                    ))
                                }

                                <div className="w-32 h-20 border-2 mx-2 my-2 flex flex-col items-center justify-center bg-blue-300 cursor-pointer hover:opacity-80">
                                    <span><MdOutlineAdd className="w-6 h-auto" /></span>
                                    <span>Add more</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </ScrollList>
        </div>
    )
}
export default CreateSlide