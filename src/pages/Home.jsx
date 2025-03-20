import React from 'react'

export const Home = () => {
    return (
        <>
        <div className='home-container'>
        <div className='home'>
            <div className='home-left'>
                <h1 ></h1>
                <p>Expense Tracker is  designed to help individuals manage their financial transactions by recording income and expenses. It allows users to track their spending habits, categorize expenses, and analyze financial data to maintain a budget effectively. Expense tracker simplifies financial management. It helps users gain better financial control, avoid unnecessary expenditures, and work toward savings goals.</p>
            </div>
            <div className='home-right'>
                <div className="thefront">
                <img src="https://static.vecteezy.com/system/resources/previews/004/730/388/non_2x/check-mark-on-a-check-box-on-a-paper-photo.jpg" alt="" />
                </div>
                <div className="theback">
                    <img src="https://media.istockphoto.com/id/528729752/vector/mobile-banking-concept-flat-stylish-icon-design.jpg?s=612x612&w=0&k=20&c=mkSv3DEwHbq6CuqddHV2tWtO0wDrJYw2Ch_mw_T7NHI=" alt="" />
                </div>
            </div>
        </div>
        <div className='home-down'>
            <div className='home-downin'>
                <img src="https://squashbled.si/wp-content/uploads/2021/08/list.png" alt="" />
                <p>List your expenses with purpose</p>
            </div>
            <img className='arrow' src="https://static.vecteezy.com/system/resources/thumbnails/037/156/782/small_2x/right-arrow-icon-vector.jpg" alt="" />
            <div className='home-downin'>
                <img src="https://www.pngplay.com/wp-content/uploads/7/Checklist-Logo-Free-PNG.png" alt="" />
                <p>Add them and sign them as done</p>
            </div>
            <img className='arrow' src="https://static.vecteezy.com/system/resources/thumbnails/037/156/782/small_2x/right-arrow-icon-vector.jpg" alt="" />
            <div className='home-downin'>
                <img src="https://img.freepik.com/premium-vector/savings-icon-logo-vector-design-template_827767-3198.jpg" alt="" />
                <p>Get savings after entering income</p>
            </div>
        </div>
        </div>
        </>
    )
}
