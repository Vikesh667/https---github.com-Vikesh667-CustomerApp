import React from 'react'
import CustomerDetails from '../../components/CustomerDetails/CustomerDetails'
import DialogBox from '../../components/DialogBox/DialogBox'
import style from './LeftSection.module.css'
const LeftSection = () => {
  return (
    <div className={style.LeftSection}>
        <div className={style.leftDiv}>
        <input
        placeholder='Customers'
         className={style.leftInput}/>
         <DialogBox/>
         </div>
         <CustomerDetails/>
    </div>
  )
}

export default LeftSection
