import React from 'react'
import TempleteSmall from "./Home/TemplateSmall"
import ExtraSmallComponent from './Home/ExtraSmallComponent';
import AdComponent from './AdComponent';


export default function Food() {
  let width= {width:"18rem"};
  let width1= {width:"18rem"}
  let width3 ={width:"15rem"}
  return (
    <div style={{display:"flex"}}>
    <div>
   <h4>Food</h4>
   <hr />
   <TempleteSmall filterBlog="Food" dataLen="4"
   blogDataLen="6" 
   btnReq="1"
   wid={width} />

    </div>

    <div className="block parentFlexBoxCol"> 
      <br />
      <h3>Top Posts</h3>
      <div >
      <TempleteSmall   dataLen="1" wid={width1} desLen="1" hed="1"  />
      <ExtraSmallComponent dataLen="4" wid={width3}  hed="1"   />
      <AdComponent/>
      </div>      
       </div>
    </div>
  )
}
