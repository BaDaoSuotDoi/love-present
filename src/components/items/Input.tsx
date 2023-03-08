const Input = ({ placeHolder, value} : {placeHolder: string, value: string})=>{
    return (
        <input className="w-full h-10 px-2 outline-none focus:ring-4 focus:border-2"
            placeholder={`${placeHolder}`}
            value={value}
        />
    )
}

export default Input