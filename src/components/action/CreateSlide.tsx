import { MdOutlineAdd } from "react-icons/md"
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import DescriptionUse from "../items/DescriptionUse";
import { SlideType } from "../controlPanel/ControlPanel";
import ScrollList from "../ui/ScrollList";

const CreateSlide = ()=>{
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="relative">
           <div onClick={()=>{
                setIsClicked(!isClicked)
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
           <div className="absolute -left-4">
                {
                    isClicked && <SlideBoardSelection />
                }
           </div>
        </div>
    )
}

const SlideBoardSelection = ()=>{
    return (
        <div className="w-[30rem] bg-yellow-800 z-50">
            <ScrollList>
                {
                    SlideType.map(group => (
                        <div key={group.groupId}>
                            <div className="flex items-center">
                                <div>{group.label}</div>
                                <DescriptionUse message="Get real-time input from your audience with these question formats" />
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    group.slides.map(slide => (
                                        <div key={slide.id}
                                            className="w-32 h-20 border-2 mx-2 my-2 flex flex-col items-center justify-center bg-blue-300">
                                            <span>{slide.icon}</span>
                                            <span>{slide.label}</span>
                                        </div>
                                    ))
                                }

                                <div className="w-32 h-20 border-2 mx-2 my-2 flex flex-col items-center justify-center bg-blue-300">
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