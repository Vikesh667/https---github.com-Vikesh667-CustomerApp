import { Avatar, getImageListItemBarUtilityClass } from '@mui/material'
import React,{useState} from 'react'
import style from './CustomerDetails.module.css'
import Image from '../../Image/Profile.png'
import { useEffect } from 'react'
const CustomerDetails = () => {
   
    const details=[
        {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    }
    , {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    },
    {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    },
    {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    },
    {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    },
    {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    },
    {
        image:<Avatar><img src={Image} alt="Profile" /></Avatar>,
        name:"Vikesh Kumar",
        email:"vikesh.667@gmail.com"
    }
]
let users = JSON.parse(localStorage.getItem("users")) 
  
  return (
    <div >
       
        {
           users.map((item)=>{
                return(
                    <div className={style.customer}>
                        <div>{item.image}</div>
                         <div className={style.child}>
                         {item.username}
                         <div>
                         {item.email}
                         </div>
                         </div>
                        </div>
                )
            })
            
        }
      
    </div>
  )
}

export default CustomerDetails
