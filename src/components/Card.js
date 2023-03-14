import React from 'react'
import start from './images/Star.png'

function Card(props) {
  let myType; 
   if (props.stats.reviewCount <= 4 && props.stats.reviewCount > 0) {
    myType = `In stock`
  } else if (props.stats.reviewCount >= 5) {
    myType = `Online`
  } else if (props.stats.reviewCount === 0) {
    myType = `Out of Stock`
  }
  return (
    <div  className='card'>
      <div className='card-des'>
        <p style={
          {
            fontSize:"15px",
            fontWeight:"700",
            backgroundColor:"white",
            position:"absolute",
            padding:"3px 3px 3px 4px",
            borderRadius:"1mm"
          }
        }>{myType}</p>
           <img src={`../images/${props.coverImg}`} alt="img"   className='card-img'/>
            <div className='card-stats'>
            <img src={start} alt="img" style={{width:"14px", height:"14px"}}/>
            <span>{props.stats.rating}({props.stats.stockAvailable}).{props.country}</span>
            </div>
            <p style={{
                fontWeight:"300"
            }}>{props.title}{props.person}  </p>
            <p><b>From ${props.price}</b>/person</p>
            </div>
            </div>  
     
  )
}

export default Card