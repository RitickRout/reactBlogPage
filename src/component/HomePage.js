import React from 'react'
import { useContext } from 'react'
import {contextCreated} from "../App"
import HeadlineArtical from './Home/HeadlineArtical'
import TempleteSmall from './Home/TemplateSmall'
import AdComponent from "./AdComponent"
import ExtraSmallComponent from './Home/ExtraSmallComponent'
import ImgLessComp from './Home/ImgLessComp'


export default function HomePage() {
  let width= {width:"16rem"}
  let width1= {width:"18rem"}
  let width3 ={width:"15rem"}

  const dataProvided = useContext(contextCreated)

  console.log(dataProvided)
  return (
    <div className='homeContent'>
      <HeadlineArtical />
      <br /> <br />
      <h3 className='left'>Latest Articals</h3>
      <hr className='UnderLine' />
      <div className=' block Parent-Box-SmallTemplate'>
       <div>  <TempleteSmall dataLen="4"   btnReq="1" wid={width} />
       
       <div >
       <img src={dataProvided[25].src} width="90%" height="25%" title='title' alt="/" />
        <h6  className='info'>{dataProvided[25].title}</h6>
       <small className='info'>{dataProvided[25].info}</small>
       </div>
       </div>
      <div className="block parentFlexBoxCol"> <AdComponent/>
      <br />
      <h3 >Top Posts</h3>
      <div >
      <TempleteSmall   dataLen="1" wid={width1} desLen="1" hed="1"  />
      <ExtraSmallComponent dataLen="4" wid={width3}  hed="1"   />
      </div>      
       </div>
      </div>
      <h4 >Latest Stories</h4>
      <ImgLessComp dataLen="4"  />
      
     </div>
  )
}
