import React from 'react'
import style from './RightSectionProfile.module.css'
import Image from '../../Image/Profile.png'
import { AiOutlineUser, AiOutlineMail,AiOutlineDelete } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { TbEdit } from 'react-icons/tb'
import { useState } from 'react'
const RightSectionProfile = () => {
    let users = JSON.parse(localStorage.getItem("users"))
   const[data,setData]=useState(users)
    const handleDelete=(id)=>{
       const newData=data.filter((item)=>{
        return item.id!==id
       })
       setData(newData)
    }
    return (
        <>
       { 
       users.map((item)=>{
        return(
            <div className={style.main} key={item.id}>
            <div className={style.child}>
            <img src={Image} alt="frofile" />
            <div className={style.logo}>
             <h1>Vikesh</h1>
             <ul>
            <li><AiOutlineUser />{item.username}</li>
            <li><AiOutlineMail />{item.email}</li>
            <li><FaPhoneAlt />{item.number}</li>
            </ul>
            <ul>
                <li><button><TbEdit/>Edit</button></li>
                <li><button onClick={()=>handleDelete(item.id)}><AiOutlineDelete/>DeleteCustomer</button></li>
            </ul>
            </div>
            </div>

        </div>
        )
       })
       
       
        }
        </>
    )
}

export default RightSectionProfile
