import React,{useContext} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'
import "./style.css"
import SideArticle from './SideArtical'
import Templete from './Templete'
export default function HeadlineArtical() {
    const data = useContext(contextCreated)
    console.log(data)
    return (
        <>
        <div className="containerHeading">
          {data
            .filter((item) => item.id === 26)
            .map((item) => {
              return (
                <div className="mainArticle1" key={Math.random()}>
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="mainArticle1Text">
                    <Link to={`/article/${item.id}`} className="link">
                      <h2 className="mainArticle1Heading">{item.title}</h2>
                    </Link>
                    <small>{item.info}</small>
                  </div>
                </div>
              )
            })}
          <SideArticle />
        </div>
        <h3 className='left'>The Latest</h3>
        <hr className='UnderLine' />
          <Templete dataLen="3"  desLen="150"/>
        </>
      )
}
