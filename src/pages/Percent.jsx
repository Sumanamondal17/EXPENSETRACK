import {  useState } from "react"
import React from 'react'
import { Circleprogress } from "../Circleprogress"

export const Percent = () => {
    const [income,setIncome]=useState(0)
    const [savings,setSavings]=useState(0)
    const [percent,setPercent]=useState(0)

    function calculate(){
        setPercent((savings/income)*100);
    }
  


    return (
        <>
        <div className="percentcover">
        <div className="percent-container">
            <div className="percentbox">
                <h2 className="percent">Enter Your income : </h2>
                <input type="number" value={income} onChange={e=>setIncome(+e.target.value)}/>
               
            </div>
           <div className="percentbox">
                 <h2>Enter your Savings : </h2>
                <input type="number" value={savings} onChange={e=>setSavings(+e.target.value)}/>
            </div>
            <div className="percentbox">
                <button onClick={calculate}>Get result</button>
                <p >You have saved {percent} percent ({percent}%) of your income.</p>
            </div>
             
        </div>
        <div className="circle-cover">
            <Circleprogress percent={percent} circlewidth="200"/>
            <p className="circle-para">Saving Percentage</p>
        </div>
        
        </div>
        </>
    )
}