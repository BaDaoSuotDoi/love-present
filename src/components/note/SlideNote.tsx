import { useState, useRef, useEffect } from 'react'
import { RiQuillPenLine } from 'react-icons/ri'


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
    
    const noteSize = useRef<{y: number, heightInit: number}>({
        y: 0, heightInit: 0
    })

    const noteRef =useRef<HTMLElement|null>(null)
    
    useEffect(()=>{
        noteRef.current = document.getElementById("note");
    }, [isOpen])

    function onMouseMove(e: any ) {
        const noteElement = noteRef.current;
        if (noteElement) {
            noteElement.style.height =
                `${noteSize.current.heightInit + noteSize.current.y - e.clientY}px`;

            // console.log(noteElement.childNodes[2].s)
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
                        <div className='w-[96%] ml-4' id="note">
                            <div className='h-2 w-10 bg-red-900 cursor-ns-resize'
                                onMouseDown={(e)=>{
                                    document.body.style.cursor = "ns-resize";
                                    if (noteRef.current) {
                                        noteSize.current = {
                                            y: e.clientY,
                                            heightInit: noteRef.current.offsetHeight
                                        }

                                        document.addEventListener('mousemove', onMouseMove);
                                        document.addEventListener('mouseup', onMouseUp);
                                    }
                                }} 
                            ></div>
                            <div className='flex flex-left'>
                                <ButtonEdit />
                            </div>
                            <textarea className='w-full h-16' />
                        </div>
                    ) : (
                        <div className='flex items-center justify-center cursor-pointer h-12'
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