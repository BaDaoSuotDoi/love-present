import { useEffect, useRef } from "react";

const useOutsideAlerter = (ref: any, outsideFunc: any) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (outsideFunc) {
                    outsideFunc();
                }
            }
        }
        document.addEventListener("mouseover", handleClickOutside);
        return () => {
            document.removeEventListener("mouseover", handleClickOutside);
        };
    }, [ref]);
}



interface Props {
    outsideFunc: () => void,
    [key: string]: any
}
const OutsideHoverDetect = (props: Props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.outsideFunc);
    return <div children={props.children} ref={wrapperRef} />;
}

export default OutsideHoverDetect;