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
                    position: 1,
                },
                {
                    id: 2,
                    numChoices: 0,
                    position: 2,
                },
                {
                    id: 3,
                    numChoices: 0,
                    position: 3,
                },
            ]
    }

    return slide;
}