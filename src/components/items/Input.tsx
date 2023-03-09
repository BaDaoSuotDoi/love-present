const Input = ({ placeHolder, value, hanldeChangeValue }: 
    { placeHolder: string, value: string, hanldeChangeValue: (value: string)=>void})=>{
    return (
        <input className="w-full h-10 px-2 outline-none focus:ring-4 focus:border-2"
            placeholder={`${placeHolder}`}
            value={value}
            onChange={(e) => { hanldeChangeValue (e.target.value)}}
        />
    )
}

export default Input