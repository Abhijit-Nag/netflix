import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

const List = ({name}) => {
    // const [moved, setMoved]= useState(0);
    const[slideNumber, setSlideNumber]=useState(0);
    const listRef= useRef();
    const handleClick=(direction)=>{
        let distance = listRef.current.getBoundingClientRect().x-50;
        if(direction === "left" && slideNumber>0){
            listRef.current.style.transform =`translateX(${(230 + distance)}px)`;
            listRef.current.style.transition=`all 0.5s ease`;
            setSlideNumber(prev=>prev-1);
        }
        if(direction === "right" && slideNumber< 10 ){
            listRef.current.style.transform =`translateX(${-230 + distance}px)`;
            setSlideNumber(prev=>prev+1);
    
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">{name} </span>
        <div className="wrapper">
            {slideNumber>0 && (

            <ArrowBackIosOutlined className='arrow left' onClick={()=> handleClick("left")} />
            )}
            <div className="container" ref={listRef}>
                <ListItem index="0"/>
                <ListItem index="1"/>
                <ListItem index="2"/>
                <ListItem index="3"/>
                <ListItem index="4"/>
                <ListItem index="5"/>
                <ListItem index="6"/>
                <ListItem index="7"/>
                <ListItem index="8"/>
                <ListItem index="9"/>
                <ListItem index="10"/>
                
            </div>
            { slideNumber<5 && (

            <ArrowForwardIosOutlined className='arrow right'onClick={()=>handleClick("right")} />
            )}
        </div>
    </div>
  )
}

export default List