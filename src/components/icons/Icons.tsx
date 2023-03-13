export const LoadingIcon = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet" width="1.5rem" height="1.5rem" aria-labelledby="descriptive-:rbr:" viewBox="0 0 24 24">
            <title id="descriptive-:rbr:">Loading</title>
            <g color="#196CFF">
                <g className="loading-svg">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform>
                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                    </g>
                </g>
            </g>
        </svg>
    )
}