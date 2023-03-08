import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import { useRef } from "react";


interface Props {
    outsideFunc: () => void,
    [key: string]: any
}
const OutsideClickDetect = (props: Props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.outsideFunc);
    return <div children={props.children} ref={wrapperRef} />;
}

export default OutsideClickDetect;