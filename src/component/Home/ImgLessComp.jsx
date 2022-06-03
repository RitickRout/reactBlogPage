import React,{useContext} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'


export default function ImgLessComp(props) {
 
 
  const tempData = useContext(contextCreated)
 
  
  let data = tempData.slice(0,props.dataLen)
 
  return( 
      <div className='ImgLess-Com' >
 {data.map((n)=>{
      let temp =n.description
     let des = temp.slice(0 ,150);
      let titleShow=n.title.slice(0,40)
        return (  
        <Link to={`/artical/${n.id}`} className="Template-Link ">
          <div class="card border" key={Math.floor(Math.random() * 1000)}>
        <div class="card-body">
          <h5 class="card-title">{titleShow}</h5>
          <p class="card-text">{des}</p>
          <p class="card-text"><small class="text-muted">Last updated {n.readTime}</small></p>
        </div>
      </div>
      </Link>)
  })}
  </div>
  )  
  
}
