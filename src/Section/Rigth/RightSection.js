import style from './RightSection.module.css'
import React from 'react'
import RightSectionProfile from './RightSectionProfile'
const RightSection = () => {
  return (
    <div className={style.RightSection}>
      <RightSectionProfile/>
      <hr />
    </div>
  )
}

export default RightSection
