import React from 'react'
import LeftSection from '../Section/Left/LeftSection'
import RightSection from '../Section/Rigth/RightSection'
import style from './HomePages.module.css'
const HomePages = () => {
  return (
     <div className={style.home}>

        
        <LeftSection/>
         <RightSection/>
       
     </div>
  )
}

export default HomePages
