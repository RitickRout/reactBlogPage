import React,{useContext} from 'react'
import { contextCreated } from '../App'
import { Link } from 'react-router-dom'


export default function BottomComp() {
    const tempData = useContext(contextCreated)
    const showBlogs = tempData.slice(1,4)
    console.log(showBlogs)
  return (
      <div className="BottomComp">
     {
         showBlogs.map((blog)=>{
            return ( <Link to={`/article/${blog.id}`} className="Template-Link ">
                 <div >
                <img src={blog.src} alt="" srcset="" width="200vw" />
                <h4>{blog.title}</h4>
                <div className='BottomComp'>
                    <img className='author-icon' src={require("../Images/MaskGroup.png")}  alt="" />
                        <div >
                            <h6>{blog.author}</h6>
                            <p>{blog.details}</p>
                        </div>
                </div>
                </div></Link>)
         })
     }
    </div>
  )
}
