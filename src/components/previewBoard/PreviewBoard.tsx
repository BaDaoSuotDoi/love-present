import SlideManagementHook from "@/store/slideManagement/hooks"
import { EMPTY_PREVIEW, Slide } from "@/store/slideManagement/slice";
import MultipleChoice, { MultipleChoiceId } from "../slides/multipleChoice/MultipleChoice";
import MultipleChoicePreview from "../slides/multipleChoice/MultipleChoicePreview";
import { WordCloudId } from "../slides/wordCloud/WordCloud";
import WordCloudPreview from "../slides/wordCloud/WordCloudPreview";

const PreviewBoard = ()=>{
    const slideTypeIdPreview = SlideManagementHook.useSlideTypeIdPreview();
    const slideActive = SlideManagementHook.useSlideActive();

    return (
        <div className="w-full bg-white mt-8 mx-10 mb-10" id="previewBoard">
           {
                slideTypeIdPreview !== EMPTY_PREVIEW && previewSlide(slideTypeIdPreview)
           }
           {
                slideActive && getSlide(slideActive)
           }
        </div>
    )
}


const previewSlide = (id: number)=>{
    switch(id){
        case MultipleChoiceId:
            return <MultipleChoicePreview/>
        case WordCloudId:
            return <WordCloudPreview/>
        default:
            return <></>
    }
}


const getSlide = (slideActive: Slide)=>{
    switch (slideActive.type) {
        case MultipleChoiceId:
            return <MultipleChoice slide={slideActive} />
        default:
            return <></>
    }
}
export default PreviewBoard