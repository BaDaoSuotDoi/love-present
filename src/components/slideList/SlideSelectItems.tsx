import SlideManagementFunction from "@/store/slideManagement/functions";
import { Slide } from "@/store/slideManagement/slice";
import { useCallback } from "react";
import { BsImageFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { RxCross2, RxDragHandleDots2 } from "react-icons/rx";
import { arrayMove, List } from "react-movable";
import DescriptionUse from "../items/DescriptionUse";
import Input from "../items/Input";

const SlideSelectItem = ({slide}:{slide: Slide})=>{

    const hanldeAdd = useCallback(()=>{
        const newOptions = [...slide.options];
        newOptions.push({
            id: newOptions.length + 1,
            position: newOptions.length + 1,
            numChoices: 0
        })
        SlideManagementFunction.hanldeUpdateSlides([{
            slideId: slide.id,
            values: {
                options: newOptions
            }
        }])
    },[slide])


    return (
        <>
            <div className='flex items-center'>
                <span className='mr-1'>Options</span>
                <DescriptionUse message="Enter the options you want your audience to vote on." />
            </div>
            <List
                values={slide.options}
                onChange={({ oldIndex, newIndex }) => {
                    const data = arrayMove(slide.options, oldIndex, newIndex);
                    for (let i = 0; i < data.length; i++) {
                        data[i].pos = i + 1
                    }
                    // setOptions(data)
                }}
                renderList={({ children, props }) => <div {...props}>{children}</div>}
                renderItem={({ value, props }) => <div {...props}>
                    <Item {...value} slide={slide} />
                </div>}
            />

            <div className='flex items-center justify-center bg-gray-500 py-2 mx-2'
                onClick={hanldeAdd}
            >
                <div><RiAddFill /></div>
                <div>Add</div>
            </div>
        </>
    )
}


const Item = ({ id, pos, data, slide }: { id: number, pos: number, data: string, slide: Slide }) => {

    const hanldeDelete = useCallback(() => {
        console.log("CLICKED")
        const newOptions = [];
        for(const option of slide.options){
            if (option.id !== id){
                newOptions.push(option);
            }
        }
        console.log({ ...newOptions })
        SlideManagementFunction.hanldeUpdateSlides([{
            slideId: slide.id,
            values: {
                options: newOptions
            }
        }])
    }, [slide])

    return (
        <div className='flex items-center py-1'>
            <div className='px-1 cursor-pointer'><RxDragHandleDots2 /></div>
            <Input
                placeHolder={`Option ${id}`}
                value={data}
                hanldeChangeValue={(str) => {
                    SlideManagementFunction.hanldeUpdateSlides([{
                        slideId: slide.id,
                        values: {
                            options: []
                        }
                    }])
                }}
            />
            <div className='px-2'>
                <BsImageFill />
            </div>
            <div className='px-2 cursor-pointer'
                onMouseDown={hanldeDelete}
                >
                <RxCross2 />
            </div>
        </div>
    )
}

export default SlideSelectItem;