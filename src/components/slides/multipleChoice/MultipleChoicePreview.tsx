import { Slide, SlidePreview } from "@/store/slideManagement/slice"
import { useEffect, useState } from "react"
import MultipleChoice from "./MultipleChoice"

const MultipleChoicePreview = ({ slidePreview, slideActive }: { slidePreview: SlidePreview, slideActive: Slide| null}) => {
    const [slide, setSlide] = useState(slideActive);
    useEffect(()=>{
        const inter = setInterval(()=>{
            if (slide) {
                setSlide({
                    ...slide,
                    options: slide.options.map(option=>{
                        return {
                            id: option.id,
                            numChoices : Math.floor(100 * Math.random())
                        }
                    })
                })
            }
        }, 1000)

        return ()=>{
            clearInterval(inter);
        }
    }, [slidePreview])

    return (
        <>
            {
                slidePreview.visualType? (slide && <MultipleChoice slide={slide}/>)
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" >
                        <path fill="#fff" d="M-7.89 67.94h1920v960h-1920z"></path>
                        <path fill="#fff" fillRule="evenodd" d="M-7.89 67.94h1920v960h-1920v-960z"></path>
                        <text transform="translate(524.77 818.06)" fontSize="32.914" fill="#9c9c9c" fontFamily="MentiDisplay,MentiText, Arial, sans-serif" fontWeight="600">Option1</text>
                        <text transform="translate(889.77 818.06)" fontSize="32.914" fill="#9c9c9c" fontFamily="MentiDisplay,MentiText, Arial, sans-serif" fontWeight="600">Option 2</text>
                        <text transform="translate(1254.77 818.06)" fontSize="32.914" fill="#9c9c9c" fontFamily="MentiDisplay,MentiText, Arial, sans-serif" fontWeight="600">Option 3</text>
                        <text transform="translate(39.27 146.06)" fontSize="49.371" fill="#8c8c8c" fontFamily="MentiDisplay,MentiText, Arial, sans-serif" fontWeight="600">Which option would you choose?</text>
                        <path fill="none" stroke="#979797" strokeLinecap="square" strokeWidth="1.371" d="M1534.28 776.28H368.56"></path>
                        <path fill="#e8e8e8" d="M452.91 541.08h263.31v234.51H452.91z"></path>
                        <path data-name="Rectangle-Copy" fill="#d2d2d2" fillRule="evenodd" d="M820.45 287.37h263.31V775.6H820.45V287.37z"></path>
                        <path data-name="Rectangle-Copy-2" fill="#b4b4b4" fillRule="evenodd" d="M1187.99 390.23h263.32V775.6h-263.32V390.23z"></path>
                    </svg>

            }
        </>
    )
}

export default MultipleChoicePreview