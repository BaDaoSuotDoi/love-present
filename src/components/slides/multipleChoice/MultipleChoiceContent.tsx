import ButtonToggle from '@/components/items/ButtonToggle'
import DescriptionUse from '@/components/items/DescriptionUse'
import Input from '@/components/items/Input'
import TextLink from '@/components/items/TextLink'
import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsImageAlt, BsImageFill } from 'react-icons/bs'
import { RiAddFill } from 'react-icons/ri'
import { RxCross2, RxDragHandleDots2 } from 'react-icons/rx'
import { arrayMove, List } from 'react-movable'

const MultipleChoiceContent = () => {
    const [isOpenMetaDesc, setIsOpenMetaDesc] = useState(false);
    const [isOpenLongDesc, setIsOpenLongDesc] = useState(false);

    const [options, setOptions] = useState([
        {
            id: 1,
            pos: 1,
            data: ""
        },
        {
            id: 2,
            pos: 2,
            data: "ABC"
        },
        {
            id: 3,
            pos: 2,
            data: ""
        }
    ])
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
            <div>
                <div className='flex items-center'>
                    <span className='mr-1'>Your question</span>
                    <DescriptionUse message="Enter the question you'd like to ask your aduience."/>
                </div>
                <Input placeHolder='Multiple Choice' value='' hanldeChangeValue={() => { }} />
            </div>
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
                    value='' 
                    hanldeChangeValue={() => { }}
                />}
            </div>
            {/* Options */}
            <div>
                <div className='flex items-center'>
                    <span className='mr-1'>Options</span>
                    <DescriptionUse message="Enter the options you want your audience to vote on." />
                </div>
                <List
                    values={options}
                    onChange={({ oldIndex, newIndex }) => {
                        const data = arrayMove(options, oldIndex, newIndex);
                        for (let i = 0; i < data.length; i++) {
                            data[i].pos = i + 1
                        }
                        setOptions(data)
                    }}
                    renderList={({ children, props }) => <div {...props}>{children}</div>}
                    renderItem={({ value, props }) => <div {...props}>
                        <Option {...value} />
                    </div>}
                />

                <div className='flex items-center justify-center bg-gray-500 py-2 mx-2'>
                    <div><RiAddFill /></div>
                    <div>Add</div>
                </div>
            </div>

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


const Option = ({ id, pos, data }: { id: number, pos: number, data: string }) => {
    return (
        <div className='flex items-center py-1'>
            <div className='px-1 cursor-pointer'><RxDragHandleDots2 /></div>
            <Input 
                placeHolder={`Option ${id}`} 
                value={data} 
                hanldeChangeValue={()=>{}}
            />
            <div className='px-2'><BsImageFill /></div>
            <div className='px-2'><RxCross2 /></div>
        </div>
    )
}
export default MultipleChoiceContent