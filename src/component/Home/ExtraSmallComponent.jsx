import React,{useContext} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'


export default function ExtraSmallComponent(props) {
 
 
  const tempData = useContext(contextCreated)
 
  
  let data = tempData.slice(1,props.dataLen)
 
  return( 
   
      <div className='ExtraSmall-com' >
 {data.map((n)=>{
      let temp =n.description
     let des = temp.slice(0 ,150);
      let titleShow=n.title.slice(0,30)
        return (  
         <div key={Math.floor(Math.random() * 1000)}> 
        <Link to={`/artical/${n.id}`} className="Template-Link " >
          
<div className="card small " style={props.wid} >
<div> <img src={n.src} className="card-img-top" alt="/" /></div>
 { props.hed?<div><h6>{titleShow}</h6>
 <small className='Date-templateSmall'>  { n.info}</small>
 </div>:null}  
</div>
 {props.hed?null:<div className='desc-smallTemplate'>
  <h6>{titleShow}</h6>
    <p>{des}</p>
    <small className='Date-templateSmall'>  { n.info}</small>
</div>  }

      </Link>
      </div>
      )
  })}
  </div>
  )  
  
}
