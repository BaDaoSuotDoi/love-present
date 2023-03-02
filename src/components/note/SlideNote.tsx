import { useState, useRef, useEffect } from 'react'
import { RiQuillPenLine } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'

const ButtonEdit = ()=>{
    return (
        <div className='flex items-center justify-center'>
            <RiQuillPenLine />
            <div className='font-medium'>Presenter notes</div>
        </div>
    )
}
const SlideNote = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    
    const noteSize = useRef<{y: number, heightInit: number, textEditHeightInit: number}>({
        y: 0, heightInit: 0, textEditHeightInit: 0
    })

    const noteRef =useRef<HTMLElement|null>(null)
    
    useEffect(()=>{
        if (!isOpen ){
             // reset buttom to default height
            const noteBottom = document.getElementById("noteBottom");
            if (noteBottom){
                noteBottom.style.height = `${window.innerHeight * 1/18}px`
            }
        }else{
            // reset height of noteEditer
            noteRef.current = document.getElementById("note");
            if (noteRef.current){
                noteRef.current.style.height = `${window.innerHeight * 1/6}px`
            }
        }
    }, [isOpen])

    function onMouseMove(e: any ) {
        const noteElement = noteRef.current;
        console.log(window.innerHeight)
        if (noteElement) {
            const textEditNode = noteElement.querySelector("textarea");
            if (textEditNode){
                const newNoteHeight = noteSize.current.heightInit + noteSize.current.y - e.clientY;
                if (newNoteHeight < window.innerHeight * 1/3 && newNoteHeight > window.innerHeight * 1/6 ){
                    noteElement.style.height =
                        `${noteSize.current.heightInit + noteSize.current.y - e.clientY}px`;
                    textEditNode.style.height =
                        `${noteSize.current.textEditHeightInit + noteSize.current.y - e.clientY}px`;
                }
            }
        }
    }

    function onMouseUp() {
        document.body.style.cursor = "auto"
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

    return (
        <>  
            <div className="h-full">
                {
                    isOpen ? (
                        <div className='w-full bg-red-500 flex flex-col items-center' id="note">
                            <div className='w-[96%] flex justify-between h-10 items-center pt-4 mb-4'>
                                <div className='flex items-center justify-center cursor-pointer h-12'
                                    onClick={() => { setIsOpen(!isOpen) }}
                                >
                                    <ButtonEdit />
                                </div>
                                <div className='h-1 w-10 bg-green-900 cursor-ns-resize '
                                    onMouseDown={(e) => {
                                        document.body.style.cursor = "ns-resize";
                                        if (noteRef.current) {
                                            const textEditNode = noteRef.current.querySelector("textarea");
                                            if (textEditNode){
                                                noteSize.current = {
                                                    y: e.clientY,
                                                    heightInit: noteRef.current.offsetHeight,
                                                    textEditHeightInit: textEditNode.offsetHeight
                                                }
                                            }

                                            document.addEventListener('mousemove', onMouseMove);
                                            document.addEventListener('mouseup', onMouseUp);
                                        }
                                    }}
                                ></div>
                                <div className='cursor-pointer'>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <textarea className='w-[96%] h-16 mb-5' />
                        </div>
                    ) : (
                        <div className='flex items-center justify-center cursor-pointer h-12'
                            id="noteBottom"
                            onClick={() => { setIsOpen(!isOpen) }}
                            >
                            <ButtonEdit />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SlideNote