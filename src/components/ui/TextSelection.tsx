import { ReactElement, useRef } from "react";

const TextSelection = ({children}: {children: ReactElement})=>{
    const editorCur = useRef<any>(null);

    return (
        <div  className="w-full relative" 
            onSelect={(e)=>{
                // //@ts-ignore
                // console.log(e.target.selectionStart);
                // console.log(window.getSelection()?.toString());
               
                // var selectionEl;
                // if (markerEl) {
                //     // Lazily create element to be placed next to the selection
                //     if (!selectionEl) {
                //         selectionEl = document.createElement("div");
                //         selectionEl.style.border = "solid darkblue 1px";
                //         selectionEl.style.backgroundColor = "lightgoldenrodyellow";
                //         selectionEl.innerHTML = "&lt;- selection";
                //         selectionEl.style.position = "absolute";

                //         document.body.appendChild(selectionEl);
                //     }

                //     // Find markerEl position http://www.quirksmode.org/js/findpos.html
                //     var obj = markerEl;
                //     var left = 0, top = 0;
                //     do {
                //         left += obj.offsetLeft;
                //         top += obj.offsetTop;
                //         //@ts-ignore
                //     } while (obj = obj.offsetParent);

                //     // Move the button into place.
                //     // Substitute your jQuery stuff in here
                //     selectionEl.style.left = left + "px";
                //     selectionEl.style.top = top + "px";
                //      //@ts-ignore
                //     markerEl.parentNode.removeChild(markerEl);
                // }


                //@ts-ignore
                // console.log(window.getComputedStyle(e).getPropertyValue("font-size"))
                
                const selection = window.getSelection();
                const editor = editorCur.current;
               if(selection){
                   const input = e.target;
                  
                   console.log(e)
                   //@ts-ignore
                   const selectionStart = input.selectionStart;
                   //@ts-ignore
                   const selectionEnd = input.selectionEnd;
                   console.log(selectionStart , selectionEnd)
                    //@ts-ignore
                   const element = window.getComputedStyle(input, null);
                   if (selectionStart !== selectionEnd && editor) {

                        const ele = document.createElement("div");
                          //@ts-ignore
                       ele.innerText = window.getSelection()?.toString();
                       editorCur.current.appendChild(ele)
                       console.log("width", ele.offsetWidth, ele.offsetHeight)
                       editorCur.current.removeChild(ele)
                          //@ts-ignore
                    //    editor.style.transform = `translate( ${(selectionStart * 8 + 8 - editorCur.current.offsetWidth / 2)%input.offsetWidth + 'px'},0px )`
                    //     editor.style.top = -16 + 'px';
                    //    editor.style.left = selectionStart * 8 + 8 - editorCur.current.offsetWidth/2+ 'px';
                   }
               }
            }}

        >
            {children}
            <div className={`absolute bg-green-500 z-50`} 
                ref={editorCur}
                >ABC</div>
        </div>
    )
}

export default TextSelection
