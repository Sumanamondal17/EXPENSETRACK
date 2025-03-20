import React from 'react'

export const Circleprogress = ({percent,circlewidth}) => {
    const radius=85;
    const dashArray=radius * Math.PI * 2 ;
    const dashOffset=dashArray - (dashArray*percent)/100
    return (
        <div >
            <svg width={circlewidth} height={circlewidth} viewBox={`0 0 ${circlewidth} ${circlewidth}`}>
                <circle cx={circlewidth/2} cy={circlewidth/2} strokeWidth="15px" r={radius} className='circlebackground'/>
                <circle cx={circlewidth/2} cy={circlewidth/2} strokeWidth="15px" r={radius} className='circleprogress' style={{strokeDasharray:dashArray,strokeDashoffset:dashOffset}} transform={`rotate(-90,${circlewidth/2} ${circlewidth/2}) `}/>
                <text x="50%" y="50%"  textAnchor='middle' className='circle-text'>{percent}%</text>
            </svg>
            
        </div>
    )
}