import { useRef, useEffect } from "react";

interface Props {
    [key: string]: any
}

const ScrollList = (props: Props)=>{
    const childrenRef = useRef<any>(null);
     
    useEffect(() => {
        if (childrenRef.current){
            const childrenElement = childrenRef.current;
            const parentElement = childrenElement.parentElement;
            if (parentElement && childrenElement) {
                let sliceListPaddingTop = 0;
                parentElement.addEventListener('wheel', (e:any) => {
                    e.preventDefault();
                    sliceListPaddingTop -= e.deltaY;
                    // scroll down
                    if (e.deltaY < 0 && sliceListPaddingTop > 0) {
                        sliceListPaddingTop = 0;
                    }

                    // scroll up
                    if (e.deltaY > 0 &&
                        childrenElement.offsetHeight + sliceListPaddingTop < parentElement.offsetHeight - 200) {

                        sliceListPaddingTop += e.deltaY;
                    }
                    childrenElement.style.marginTop = `${sliceListPaddingTop}px`;
                    // console.log("Wheel", childrenElement.offsetHeight + sliceListPaddingTop, parentElement.offsetHeight)
                })
            }
        }
    }, [childrenRef])

    return <div children={props.children} ref={childrenRef} />;
}

export default ScrollList;