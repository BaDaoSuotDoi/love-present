const TextLink = ({ text, action }: { text: string, action :()=>void})=>{
    return (
        <p className="text-blue-500 hover:text-blue-600 cursor-pointer"
            onClick={action}
            >
            {text}
        </p>
    )
}

export default TextLink