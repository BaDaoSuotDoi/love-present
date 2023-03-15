import { MultipleChoiceId } from "@/components/slides/multipleChoice/MultipleChoice"
import SlideManagementFunction from "@/store/slideManagement/functions"
import { Slide } from "@/store/slideManagement/slice"
import DescriptionUse from "../DescriptionUse"
import Input from "../Input"

const getPlaceHolder = (slideType: number)=>{
    switch(slideType){
        case MultipleChoiceId:
            return 'Multiple Choice'
    }
    return ''
}

const SlideQuestion = ({ slide }:{ slide: Slide })=>{
    return (
        <>
            <div className='flex items-center'>
                <span className='mr-1'>Your question</span>
                <DescriptionUse message="Enter the question you'd like to ask your aduience." />
            </div>
            <Input 
                placeHolder={getPlaceHolder(slide.type)} 
                value={slide.question ? slide.question : ""}
                hanldeChangeValue={(str) => {
                    SlideManagementFunction.hanldeUpdateSlides([{
                        slideId: slide.id,
                        values: {
                            question: str
                        }
                    }])
                }}
            />
        </>
    )
}

export default SlideQuestion