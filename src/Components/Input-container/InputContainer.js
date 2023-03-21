import React from 'react'
import "./styles.scss"
import {AiOutlineCalendar} from "react-icons/ai"
const InputContainer = () => {
  return (
    <div className='InputContainer'>
    <div className='InputContainer-content'>


<div className='select-input'>
<div className='select-input-content'>
    <div className='select' style={{backgroundColor:"#e9f2ff"}}>
        <div className='dot'></div>
        <p>الكل</p>
    </div> <div className='select'>
        <div className='dot1'></div>
        <p>غير موثوف</p>
    </div> <div className='select'>
        <div className='dot2'></div>
        <p>موثق</p>
    </div>
</div>
</div>

    <div type="date" className='date-input'
>
<AiOutlineCalendar/>
<p> 7/7/2022 → 1/7/2022 </p>
<p>
   :الفترة
</p>
</div>
    </div>
    </div>
  )
}

export default InputContainer