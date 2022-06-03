import React,{useContext,useState} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'

export default function TempleteSmall(props) {
  const [blogDataLen ,setBlogDatalen]=useState(props.dataLen)
  const tempData = useContext(contextCreated)
  let data ;
  if(props.filterBlog != null){
    let filteredData =tempData.filter((blog)=>blog.tags===props.filterBlog)
    data = filteredData.slice(0,blogDataLen)
  }else{
     data = tempData.slice(0,blogDataLen)
  }
 
  return( 
      <div >
 { data.map((n)=>{
      let temp =n.description
     let des = temp.slice(0 ,150);
      let titleShow=n.title.slice(0,40)
        return (  

        <Link to={`/article/${n.id}`} className="Template-Link ">
          
<div className="card " style={props.wid}>
<div> <img src={n.src} className="card-img-top" /></div>
 { props.hed?<div><h5>{titleShow}</h5>
 <small className='Date-templateSmall'>  { n.info}</small>
 </div>:null}  
</div>
 {props.hed?null:<div className='desc-smallTemplate'>
  <h5>{titleShow}</h5>
    <p>{des}</p>
    <small className='Date-templateSmall'>  { n.info}</small>
</div>  }
      </Link>)
  })}
  {
  (props.btnReq != null)? <span class="material-symbols-outlined">
  arrow_downward
           <button onClick={()=>{setBlogDatalen(blogDataLen +3)}} >Load more</button> </span>   :null
  }

  </div>
  )  
  
}
