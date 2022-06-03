import React,{useContext} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'

export default function Templete(props) {
 
  
  const tempData = useContext(contextCreated)
 
  
  let data = tempData.slice(0,props.dataLen)
 
  return( <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
 {data.map((n)=>{
      let temp =n.description
     let des = temp.slice(0 ,props.desLen);
      let titleShow=n.title.slice(0,40)
        return (  

        <Link to={`/article/${n.id}`} className="Template-Link" >

     
        <div key={Math.floor(Math.random() * 1000)}> 
        <div className="col" >
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={200}
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src={n.src}
          />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            <h5>{titleShow}</h5> 
            </text>
        
          <div className="card-body">
            <p className="card-text">
             {
            des
             }
            </p>
            <div className="d-flex justify-content-between align-items-center">
              {
                n.info 
              }
              {/* <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div> */}
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div></div>
      </Link>)
  })}
  </div>
  )  
  
}
