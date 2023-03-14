import { Slide } from '@/store/slideManagement/slice';
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';
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
    return (
        <div className="w-full h-full bg-yellow-200 flex justify-center">
            {
                slide.options.map(option => (
                    <div key={option.id} className="h-3/4 bg-pink-500 flex flex-col items-center">
                        <div className='h-full bg-red-800 w-32 flex flex-col justify-end border-b-2 px-2 mt-10'>
                            <div className='w-full flex justify-center'>{option.numChoices}</div>
                            <StaticBar percent={option.numChoices} />
                        </div>
                        <div>Option {option.id}</div>
                    </div>
                ))
            }
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