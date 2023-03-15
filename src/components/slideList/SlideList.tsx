import { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { VscListSelection } from 'react-icons/vsc';
import SlideManagementHook from '@/store/slideManagement/hooks';
import SlideManagementFunction from '@/store/slideManagement/functions';
import { MultipleChoiceIcon, MultipleChoiceId } from '../slides/multipleChoice/MultipleChoice';
import { WordCloudIcon, WordCloudId } from '../slides/wordCloud/WordCloud';
import MenuContextFunction from '@/store/menuContext/functions';
import { MenuContextType } from '@/store/menuContext/slice';

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
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className="w-full h-32 flex items-center py-4 px-1 cursor-grab hover:opacity-75 bg-red-300" 
            id="sliceScreen"
            onMouseOver={()=>{
                setIsOpenMenu(true)
            }}

            onMouseLeave={()=>{
                setIsOpenMenu(false)
            }}

            onMouseDown={()=>{
                SlideManagementFunction.changeSildeActionId(id)
            }}
        >
            <div className='border-2 border-black h-[82%] rounded'></div>
            <div className='flex justify-center items-start h-full w-full'>
                <div className='flex-col'>
                    <div className='h-20 -mt-1 px-2'>{position+1}</div>
                    <div className='cursor-pointer ml-2 rounded'
                        id="slideScreenMenu"
                        onMouseDown={(e)=>{
                            e.stopPropagation()
                            MenuContextFunction.setMenuContext({
                                x: e.clientX,
                                y: e.clientY,
                                isOpen: true,
                                type: MenuContextType.sliceScreen
                            })
                        }}
                        >
                        {isOpenMenu  && <VscListSelection /> }
                    </div>
                </div>
                <div className='w-full rounded border-2 border-black h-full cursor-pointer flex items-center justify-center'>
                    {getSlideDescByType(type)}
                </div>
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