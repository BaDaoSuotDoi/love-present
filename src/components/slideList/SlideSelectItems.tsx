import SlideManagementFunction from "@/store/slideManagement/functions";
import { Slide } from "@/store/slideManagement/slice";
import { useCallback } from "react";
import { BsImageFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { RxCross2, RxDragHandleDots2 } from "react-icons/rx";
import { arrayMove, List } from "react-movable";
import DescriptionUse from "../items/DescriptionUse";
import Input from "../items/Input";

type Config = {
    key: keyof Slide,
    title: string
}

const SlideSelectItem = ({ slide, config }: { slide: Slide, config: Config})=>{

    const hanldeAdd = useCallback(()=>{
        const newSelections = [...slide[config.key]];
        let id = 0;
        let position = 0;
        for(const selection of newSelections){
            id = Math.max(id, selection.id);
            position = Math.max(position, selection.position);

        }
        newSelections.push({
            id: id + 1,
            position: position + 1 ,
            numChoices: 0,
            data: "",
            image: "",
        })

        SlideManagementFunction.hanldeUpdateSlides([{
            slideId: slide.id,
            values: {
                options: newSelections
            }
        }])
    },[slide])


    return (
        <>
            <div className='flex items-center'>
                <span className='mr-1'>{config.title}s</span>
                <DescriptionUse message="Enter the options you want your audience to vote on." />
            </div>
            <List
                values={slide.options}
                onChange={({ oldIndex, newIndex }) => {
                    const data = arrayMove(slide.options, oldIndex, newIndex);
                    console.log({ ...data })
                    SlideManagementFunction.hanldeUpdateSlides([
                        {
                            slideId: slide.id,
                            values: {
                                options: data.map((item, index) => ({
                                    ...item,
                                    position: index + 1
                                }))
                            }
                        }
                    ])
                    // setOptions(data)
                }}
                renderList={({ children, props }) => <div {...props}>{children}</div>}
                renderItem={({ value, props }) => <div {...props}>
                    <Item {...value} 
                        slideId={slide.id} 
                        selections={slide[config.key]}
                        title={config.title}
                    />
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


const Item = ({ id, data, slideId, position, selections, title }
    : { id: number, data: string, position: number, slideId: number, selections: any[], title: string }) => {

    const hanldeDelete = useCallback(() => {
        const newSelections = [];
        for (const selection of selections){
            if (selection.id !== id){
                newSelections.push(selection);
            }
        }

        SlideManagementFunction.hanldeUpdateSlides([{
            slideId: slideId,
            values: {
                options: newSelections.map((selection, index) =>({
                    ...selection,
                    position: index + 1
                }))
            }
        }])
    }, [selections])

    const handleChangeInput = useCallback((str: string)=>{
        const newSelections = [];
        for (const selection of selections) {
            const _selection = {
                ...selection,
            }

            if (selection.id === id) {
                _selection.data = str;
            }
            newSelections.push(_selection);
        }

        SlideManagementFunction.hanldeUpdateSlides([{
            slideId: slideId,
            values: {
                options: newSelections
            }
        }])
    }, [selections])

    return (
        <div className='flex items-center py-1'>
            <div className='px-1 cursor-pointer'><RxDragHandleDots2 /></div>
            <Input
                placeHolder={`${title} ${position}`}
                value={data}
                hanldeChangeValue={handleChangeInput}
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