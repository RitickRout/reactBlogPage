import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import { contextCreated } from '../App';
import BottomComp from './BottomComp';


export default function NewEle() {
  const tempData = useContext(contextCreated)
    const params = useParams();
    const {id} = params;
    
    const selectedBlog = tempData.filter((blog)=>blog.id===Number(id))
    console.log(selectedBlog)
  return (
    <div >
      <h2>{selectedBlog[0].title}</h2>
      <br /> <br />
      <div className="upper-Box">
       <div  > <img src={require('../Images/Mask2x.png')} alt="not Found"  />
       </div > 
       <div className='pad-top'> <p>{selectedBlog[0].author}</p>
       <small>  {selectedBlog[0].readTime +"  "+ selectedBlog[0].date}</small></div>
       <div></div>
      <div className='upper-box-right' >
        <img src={require('../Images/facebook.png')} alt="" srcset="" width="40vw" height="40vh" />
        <img src={require('../Images/instagram.png')} alt="" srcset="" width="40vw" height="40vh"  />
        <img src={require('../Images/twitter.png')} alt="" srcset="" width="40vw" height="40vh"  />
      </div>
      </div>
      
      <div>
      <img src={selectedBlog[0].src} alt={selectedBlog[0].alt}  />
      </div>
      
      <p style={{width:"80%",margin:"120px",fontSize:"4vh"}}>
        {selectedBlog[0].description}
      </p>
      <div >
   
      <BottomComp   />
  
      </div>
 
    </div>
  )
}
