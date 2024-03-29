import { useState, useRef } from "react"
import TextSelection from "../ui/TextSelection";

const Input = ({ placeHolder, value, hanldeChangeValue, limitLen}: 
    { placeHolder: string, value: string, hanldeChangeValue: (value: string) => void, limitLen?: number })=>{
    const [isFocus, setIsFocus] = useState(false);
    const maxLen = useRef(limitLen ? limitLen : 100);

    const hanldeChange = (e: any)=>{
        const str = e.target.value;
        if (maxLen.current - str.length < 0){
            return;
        }
        hanldeChangeValue(str);
    }
    return (
        <TextSelection>
            <div className="w-full relative flex flex-col">
                <input className="w-full h-10 px-2 outline-none focus:ring-4 focus:border-2 box-border pr-10"
                    placeholder={`${placeHolder}`}
                    value={value}
                    onChange={hanldeChange}
                    onFocus={() => { setIsFocus(true) }}
                    onBlur={() => { setIsFocus(false) }}
                    maxLength={maxLen.current}
                />
                {
                    isFocus && <div className={`absolute right-2 top-2 ${maxLen.current - value.length < maxLen.current / 2 ? 'text-red-500' : ''}`}>
                        {maxLen.current - value.length}
                    </div>
                }

                {
                    isFocus && maxLen.current - value.length <= 0 && (
                        <div className="text-red-500 bg-green-500">You have reached the maximum length</div>
                    )
                }
            </div>
        </TextSelection>
    )
}

export default Input