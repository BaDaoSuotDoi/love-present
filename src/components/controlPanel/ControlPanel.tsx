import { GoGraph } from 'react-icons/go'
import { TiTick } from 'react-icons/ti'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react';
import OutsideClickDetect from '../ui/OutsideClickDetect';
import ScrollList from '../ui/ScrollList';
import MultipleChoiceContent from '../slides/multipleChoice/MultipleChoiceContent';
import { MultipleChoiceIcon, MultipleChoiceId } from '../slides/multipleChoice/MultipleChoice';
import { WordCloudId } from '../slides/wordCloud/WordCloud';
import SlideManagementFunction from '@/store/slideManagement/functions';

export const SlideType = [
    {
        groupId: 1,
        label: "Popular question type",
        desc: "Get real-time input from your audience with these question formats.",
        slides: [
            {
                id: MultipleChoiceId,
                icon: <MultipleChoiceIcon/>,
                label: "Multiple Choice"
            },
            {
                id: WordCloudId,
                icon: <GoGraph />,
                label: "Word Cloud"
            },
            {
                id: 3,
                icon: <GoGraph />,
                label: "Open Ended"
            },
            {
                id: 4,
                icon: <GoGraph />,
                label: "Scales"
            },
            {
                id: 5,
                icon: <GoGraph />,
                label: "Ranking"
            },
            {
                id: 6,
                icon: <GoGraph />,
                label: "Q&A"
            },
        ],
    },
    {
        groupId: 2,
        label: "Quiz Competiton",
        desc: "Let your audience compete with one another in fun quizzes",
        slides: [
            {
                id: 7,
                icon: <GoGraph />,
                label: "Select Answer"
            },
            {
                id: 8,
                icon: <GoGraph />,
                label: "Type Answer"
            },
        ],
    },
    {
        groupId: 3,
        label: "Content slices",
        desc: "Show content that your audience can react to and follow in their devices.",
        slides: [
            {
                id: 9,
                icon: <GoGraph />,
                label: "Heading"
            },
            {
                id: 10,
                icon: <GoGraph />,
                label: "Paragraph"
            },
            {
                id: 11,
                icon: <GoGraph />,
                label: "Bullets"
            },
            {
                id: 12,
                icon: <GoGraph />,
                label: "Image"
            },
            {
                id: 13,
                icon: <GoGraph />,
                label: "Video"
            },
            {
                id: 14,
                icon: <GoGraph />,
                label: "Big"
            },
            {
                id: 15,
                icon: <GoGraph />,
                label: "Quote"
            },
            {
                id: 16,
                icon: <GoGraph />,
                label: "Number"
            },
            {
                id: 17,
                icon: <GoGraph />,
                label: "Instructions"
            },
        ],
    },
    {
        groupId: 4,
        label: "Advanced questions",
        desc: "Use these question types to collect specific input.",
        slides: [
            {
                id: 18,
                icon: <GoGraph />,
                label: "100 points"
            },
            {
                id: 19,
                icon: <GoGraph />,
                label: "2 x 2 Grid"
            },
            {
                id: 20,
                icon: <GoGraph />,
                label: "Who will win?"
            },
            {
                id: 21,
                icon: <GoGraph />,
                label: "Pin on image"
            },
        ],
    }
]

const ControlPanel = ()=>{
    const [isOpenSelectSlide, setIsOpenSelectSlide] = useState(false);

    return (
        <div className='mb-20 h-full'>
            <div className='px-2 py-4'>
                <div className='font-medium py-3'>Slide type</div>
                <OutsideClickDetect outsideFunc={() => { setIsOpenSelectSlide(false)}}>
                    <div className='flex items-center cursor-pointer bg-yellow-600 justify-between px-2 py-2'
                        onClick={()=>{
                            setIsOpenSelectSlide(!isOpenSelectSlide)
                        }}
                        >
                        <div className='flex items-center '>
                            <div><GoGraph /></div>
                            <div className='ml-2'>ABC</div>
                        </div>
                        <div><MdOutlineKeyboardArrowDown /></div>
                    </div>
                    {
                        isOpenSelectSlide && (
                            <div className='w-full bg-red-300 h-[34rem]  overflow-hidden absolute z-20'>
                                <ScrollList>
                                    {
                                        SlideType.map(group => (
                                            <div key={group.groupId}>
                                                <div className='font-medium bg-pink-500'>{group.label}</div>
                                                {
                                                    group.slides.map(slide => (
                                                        <div key={slide.id} 
                                                            onMouseOver={()=>{SlideManagementFunction.changeSildeTypeIdPreview(slide.id)}}
                                                            className='flex cursor-pointer items-center bg-blue-600 justify-between px-2 py-2'>
                                                            <div className='flex items-center '>
                                                                <div className='w-6 h-6'>{slide.icon}</div>
                                                                <div className='ml-2'>{slide.label}</div>
                                                            </div>
                                                            <div><TiTick /></div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </ScrollList>
                            </div>
                        )
                    }
                </OutsideClickDetect>
            </div>
            
            <div className='mx-2'>
                <div className='flex justify-between font-medium cursor-pointer'>
                    <div className='w-1/2 flex justify-center py-2 border-b-2 border-blue-600'>Content</div>
                    <div className='w-1/2 flex justify-center py-2 border-b-2'>Customize</div>
                </div>
                <MultipleChoiceContent/>
            </div>
        </div>
    )
}

export default ControlPanel