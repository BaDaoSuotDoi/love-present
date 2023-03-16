import { Slide } from '@/store/slideManagement/slice';
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef } from 'react';
export const MultipleChoiceId = 1;

const StaticBar = ({ percent }: { percent: number })=>{
    const props = useSpring({ height: `${percent}%` });
    
    return (
        <animated.div
            className={`bg-blue-500`}
            style={props}
        >
        </animated.div>
    )
}

const MultipleChoice = ({slide}: {slide: Slide}) => {
    const multiBoardRef = useRef<any>();

    useEffect(()=>{
        // resize column choice
        if (multiBoardRef.current){
            const comps = multiBoardRef.current.childNodes;
            const widthElement = Math.floor(1 / (slide.options.length + 2) * 100);
            for(const comp of comps){
                for (const child of comp.childNodes){
                    child.style.width = `${widthElement}%`;
                }
            }

        }
    }, [slide]) 
    return (
        <div className="w-full h-full bg-yellow-200 flex flex-col px-6">
            {
                slide.question && <div className='font-medium text-[3rem] text-white mt-10'>{slide.question}</div>
            }
           <div className='w-full h-full flex justify-center flex-col items-center'
                id="multiBoard"
                ref={multiBoardRef}
            >
                <div className='w-4/5 h-3/4 flex justify-evenly bg-blue-800 border-b-4'>
                    {
                        [...slide.options]
                        .sort((a,b)=>a.position - b.position)
                        .map(option => (
                            <div key={option.id} className={`bg-red-800 flex flex-col justify-end mt-10`}>
                                <div className='w-full flex justify-center'>{option.numChoices}</div>
                                <StaticBar percent={option.numChoices} />
                            </div>
                        ))
                    }
                </div>
                <div className="w-4/5 flex justify-evenly">
                    {
                        slide.options.map((option, index) => (
                            <div 
                                key={option.id}
                                className={` flex justify-center`}>
                                {option.data ? option.data :`Option ${index + 1}`}
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
    )
}

export default MultipleChoice;

export const MultipleChoiceIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet" aria-labelledby="descriptive-:re:" viewBox="0 0 48 48">
            <title id="descriptive-:re:">Bar Chart Icon</title>
            <rect x="32.73" y="17.04" width="11.4" height="25.25" fill="rgb(58, 63, 74)"></rect>
            <rect x="3.87" y="26.22" width="11.4" height="16.06" fill="rgb(222, 225, 230)"></rect>
            <rect x="18.3" y="4.31" width="11.4" height="37.97" fill="rgb(95, 99, 109)"></rect>
            <rect y="42.28" width="48" height=".99" fill="#000000"></rect>
        </svg>
    )
}