import React from 'react'
import airbnb from './images/Vectorbnb.png'
import groupPic from './images/Grouppic.png'


function Header() {
  return (
    <div 
    style={{backgroundColor: "#FFFFFF",
     boxShadow:" 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
    position:"sticky",
    height:"70px",
    top:"0",
    bottom:"0"}}
    >
        <img src={airbnb} alt="logo" 
        style={{padding:"15px 25px"}}
        />

<div
         style={{display:"flex",
         justifyContent:"center",
         backgroundColor:"#E5E5E5",
         marginTop:"1%"
         }} 
        >
            <img src={groupPic} alt=""
            style={{
                padding:"30px 0px"
            }}
            className="groupic"
             />    
        </div>

        <div 
        style={{
          backgroundColor:"#E5E5E5",
          padding:"15px 0px",
        }}
        >
        <h1 style={{
            fontSize:"45px",
            marginLeft:"2%"
        }}>
         Online Experiences
         </h1>
        <p    className="join" style={{
         width:"320px" ,
         marginLeft:"2%",
         fontSize:"18px"
        }}
        >
          Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
        </p>
    </div>
    </div>
  )
}
// 
export default Header