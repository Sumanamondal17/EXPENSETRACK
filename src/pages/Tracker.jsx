import React,  {useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import { Expenses } from '../components/Expenses';


export const Tracker = () => {
    const [number,setNumber]=useState(localStorage.getItem("number") ? JSON.parse(localStorage.getItem("number")):[]);
    const [total,setTotal]=useState(0);
    const [savings,setSavings]=useState(0)
    const [income,setIncome]=useState(localStorage.getItem("income") ? JSON.parse(localStorage.getItem("income")):[]);

    const [expenseList,setExpenseList]=useState(localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[]);

    function add(){
        setTotal(number+total);
    }

    function calculateSavings(){
        setSavings(income-total);
    }

    const inputRef=useRef()
    const addinputText=()=>{
        const inputText=inputRef.current.value.trim();
        
        if(inputText===""){
            return null;
        }

        const newExpense={
            id:Date.now(),
            text:inputText,
            isComplete:false
        }
        setExpenseList((prev)=>[...prev,newExpense]);
        inputRef.current.value="";
    }

    const deleteExpense=(id)=>{
        setExpenseList((prevExpenses)=>{
           return prevExpenses.filter((expense)=> expense.id!==id)
        })
    }

    const toggle=(id)=>{
        setExpenseList((prevExpenses)=>{
            return prevExpenses.map((expense)=>{
                if(expense.id===id){

                    return {...expense,isComplete:!expense.isComplete}
                }
                return expense;
            })
        })
    }
useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenseList));
    localStorage.setItem("income",JSON.stringify(income));
        localStorage.setItem("number",JSON.stringify(number));
    localStorage.setItem("savings",JSON.stringify(savings));

},[expenseList,income,number,savings])

    return (
     <>
     <div className="trackercoverout">
    <div className='tracker-cover'>
        <div className='tracker-up '>
            <div >
                <h2 > Write Your Expense List with Purpose </h2>
            </div>
            <div className='tracker-upin '>
                <input ref={inputRef}  type="text" placeholder='List your Expenses' />
                <button onClick={addinputText} className=''>Include</button>
            </div>
            <div  className='list'>
                {expenseList.map((expenseitem,index)=>{
                    return <Expenses key={index} text={expenseitem.text} id={expenseitem.id} isComplete={expenseitem.isComplete} deleteExpense={deleteExpense} toggle={toggle}/>
                })}   
            </div>
            <div className='income'>
                <h2 > Enter Your Income :</h2>
                <input type="number" placeholder='Enter Income..' value={income} onChange={e=>setIncome(+e.target.value)}/>
            </div>
        </div>

        <div className='total' >
            <h2 >Calculate Total Expense Value:</h2>
            <div className='totalcal'> 
            <input type="text" placeholder='Enter expense value..'  className='' onChange={e=>setNumber(+e.target.value)}/>
            <button onClick={add}>Add</button>
            </div>
            <h2 >Total= {total}</h2>
            <h2 >Hey, Your savings is here.</h2>
            <button onClick={calculateSavings} className='showsavings'>Show Savings</button>
            <p >Savings : {savings}</p>
        </div>
        </div>
        </div>
        </>
    )
}