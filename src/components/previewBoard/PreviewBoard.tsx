import SlideManagementFunction from "@/store/slideManagement/functions";
import SlideManagementHook from "@/store/slideManagement/hooks"
import { Slide, SlidePreview } from "@/store/slideManagement/slice";
import MultipleChoice, { MultipleChoiceId } from "../slides/multipleChoice/MultipleChoice";
import MultipleChoicePreview from "../slides/multipleChoice/MultipleChoicePreview";
import { WordCloudId } from "../slides/wordCloud/WordCloud";
import WordCloudPreview from "../slides/wordCloud/WordCloudPreview";

const PreviewBoard = ()=>{
    const slideTypePreview = SlideManagementHook.useSlideTypePreview();
    const slideActive = SlideManagementHook.useSlideActive();

    return (
        <div className="w-full bg-white mt-8 mx-10 mb-10" id="previewBoard">
           {
                slideTypePreview ? previewSlide(slideTypePreview, slideActive)
                    : slideActive && getSlide(slideActive)
           }
           <button 
                onMouseOver={()=>{
                    if (slideActive){
                        SlideManagementFunction.changeSildeTypePreview({ slideTypeId: slideActive.type })
                    }}}
                
                onMouseLeave={() => {
                    SlideManagementFunction.changeSildeTypePreview(null)
                }}

            >Visual</button>
        </div>
    )
}


const previewSlide = (slidePreview: SlidePreview, slideActive: Slide| null)=>{
    switch (slidePreview.id){
        case MultipleChoiceId:
            return <MultipleChoicePreview 
                    slidePreview={slidePreview}
                    slideActive={slideActive}
                />
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