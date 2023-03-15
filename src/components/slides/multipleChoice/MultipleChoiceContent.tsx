import ButtonToggle from '@/components/items/ButtonToggle'
import DescriptionUse from '@/components/items/DescriptionUse'
import Input from '@/components/items/Input'
import SlideQuestion from '@/components/items/slideContent/SlideQuestion'
import TextLink from '@/components/items/TextLink'
import SlideSelectItem from '@/components/slideList/SlideSelectItems'
import SlideManagementFunction from '@/store/slideManagement/functions'
import { Slide } from '@/store/slideManagement/slice'
import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsImageAlt, BsImageFill } from 'react-icons/bs'
import { RiAddFill } from 'react-icons/ri'
import { RxCross2, RxDragHandleDots2 } from 'react-icons/rx'
import { arrayMove, List } from 'react-movable'

const MultipleChoiceContent = ({slide}:{slide: Slide}) => {
    const [isOpenMetaDesc, setIsOpenMetaDesc] = useState(false);
    const [isOpenLongDesc, setIsOpenLongDesc] = useState(false);

    return (
        <div>
            <div className='py-2'>
                {
                    isOpenMetaDesc ?
                        <p className='text-gray-500'>The meta field allows you to add context to your slide.</p>
                        : <TextLink text='Add meta desciption'
                            action={() => { setIsOpenMetaDesc(true) }}
                        />
                }
                {isOpenMetaDesc &&
                    <Input placeHolder='Meta' value='' hanldeChangeValue={() => { }} />}
            </div>
            <SlideQuestion slide={slide}/>
            <div className='py-2'>
                {
                    isOpenLongDesc ?
                        <p className='text-gray-500'>Longer description shown on your audience's phones and if you hover the question while presenting.</p> 
                        :<TextLink text='Add longer description'
                            action={() => { setIsOpenLongDesc(true) }}
                        />
                }
                {isOpenLongDesc && 
                <Input 
                    placeHolder='Your description' 
                    value={''}
                    hanldeChangeValue={() => { }}
                />}
            </div>
            {/* Options */}
            <SlideSelectItem slide={slide}/>

            {/* Image */}
            <div>
                <div className='flex items-center'>
                    <span className='mr-1'>Image</span>
                    <DescriptionUse message="Display an image on this slide." />
                </div>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <BsImageAlt className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col'>
                        <div>Drag and drop or</div>
                        <div>Click to add image</div>
                    </div>
                </div>
            </div>
            {/* Extras */}
            <div>
                <div>Extras</div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>Show correct answer(s)</div>
                        <AiOutlineQuestionCircle />
                    </div>
                    <ButtonToggle />
                </div>
            </div>
        </div>
    )
}


export default MultipleChoiceContent