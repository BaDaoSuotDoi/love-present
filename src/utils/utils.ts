import { MultipleChoiceId } from "@/components/slides/multipleChoice/MultipleChoice"
import { Slide } from "@/store/slideManagement/slice"

export const  createInitSlide = (slideTypeId: number)=>{
    const slide:Slide = {
        id: 0,
        type: slideTypeId,
        question: "",
        position: 0,
        options: []
    }

    switch(slideTypeId){
        case MultipleChoiceId:
            slide.options = [
                {
                    id: 1,
                    numChoices: 0,
                },
                {
                    id: 2,
                    numChoices: 0,
                },
                {
                    id: 3,
                    numChoices: 0,
                },
            ]
    }

    return slide;
}