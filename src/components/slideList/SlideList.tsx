import { useState, useEffect } from 'react';
import { List, arrayMove } from 'react-movable';
import SlideManagementHook from '@/store/slideManagement/hooks';
import SlideManagementFunction from '@/store/slideManagement/functions';
import { MultipleChoiceIcon, MultipleChoiceId } from '../slides/multipleChoice/MultipleChoice';
import { WordCloudIcon, WordCloudId } from '../slides/wordCloud/WordCloud';
import MenuContextFunction from '@/store/menuContext/functions';
import { MenuContextType } from '@/store/menuContext/slice';
import { PlayIcon, ThreeDotIcon } from '../icons/Icons';

const SlideList: React.FC = () => {
    const slides = SlideManagementHook.useSlideList();

    return (
        <div id="slideList">
            <List
                values={slides}
                onChange={({ oldIndex, newIndex }) => {
                    const data = arrayMove(slides, oldIndex, newIndex);
                    SlideManagementFunction.hanldeUpdateSlides(data.map((slide, index)=>({
                        slideId: slide.id,
                        values: {
                            position: index
                        }
                    })))
                }}
                renderList={({ children, props }) => <div {...props}>{children}</div>}
                renderItem={({ value, props }) => <div {...props}>
                    <SlideSmallScreen {...value} />
                </div>}
            />
        </div>
    );
};

const SlideSmallScreen = ({ id, type, position }: { id: number, type: number, position: number})=>{
    const slideActive = SlideManagementHook.useSlideActive();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        if (slideActive && slideActive.id === id){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }, [slideActive])

    return (
        <div className={`w-full relative h-32 flex items-center py-4 px-1 cursor-grab ${isActive ? 'bg-gray-200' : 'bg-red-300'}`} 
            id="sliceScreen"
            onMouseOver={()=>{
                setIsOpenMenu(true)
            }}

            onMouseLeave={()=>{
                setIsOpenMenu(false)
            }}

            onMouseDown={(e)=>{
                e.preventDefault()
                if (e.button === 0){
                    // click left mouse
                    SlideManagementFunction.changeSildeActionId(id);
                }
            }}
        >   
            <div className={`border-2 h-[82%] rounded ${isActive ? 'border-blue-600' : 'opacity-0'}`}></div>
            <div className='flex flex-col items-center relative h-full w-8'>
                <div className='font-medium'>{position + 1}</div>
                {
                    isActive && <div className='w-2 h-auto'><PlayIcon /></div>
                }
                {
                    isOpenMenu && (
                        <div className={`cursor-pointer rounded absolute bottom-0 w-4 h-auto py-1 flex items-center justify-center ${isActive ? 'bg-blue-200' : 'bg-gray-200'}`}
                            id="slideScreenMenu"
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                MenuContextFunction.setMenuContext({
                                    x: e.clientX,
                                    y: e.clientY,
                                    isOpen: true,
                                    type: MenuContextType.sliceScreen
                                })
                            }}
                        >
                            <ThreeDotIcon />
                        </div>
                    )
                }
            </div>

            <div className='top-3 bottom-3 right-2 absolute left-10 rounded border-2 border-black bg-black cursor-pointer flex items-center justify-center hover:opacity-75 '>
                {getSlideDescByType(type)}
            </div>
        </div>
    )
}

const getSlideDescByType = (type: number)=>{
    switch(type){
        case MultipleChoiceId:
            return (
                <div className='w-8 h-auto'>
                    <MultipleChoiceIcon />
                </div>
            )
        case WordCloudId:
            return (
                <div className='flex flex-col items-center'>
                    <div className='w-8 h-auto'>
                        <WordCloudIcon />
                    </div>
                    <div>Word Cloud</div>
                </div>
            )
        default:
            return <></>
    }
}
export default SlideList