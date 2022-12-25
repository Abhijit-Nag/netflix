import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

const List = ({ name, type, genre }) => {
    // const [moved, setMoved]= useState(0);
    const [slideNumber, setSlideNumber] = useState(0);
    // console.log(`this is my api key : ${process.env.REACT_APP_API_KEY}`);
    console.log({ name, type, genre })
    const [data, setData] = useState([]);

    const [apiKey, setApiKey] = useState("");

    // useEffect(() => {
    //     if (name === "Popular on JMedia") {
    //         setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`)
    //     }
    //     else if(name==="Continue to Watch"){
    //         setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`)
    //     }
    //     else{
    //         setApiKey(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${api}`)
    //     }
    // },[type, name]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                if (name === "Popular on JMedia") {
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${process.env.REACT_APP_API_KEY}`)
                }
                else if(name==="Continue to Watch"){
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${process.env.REACT_APP_API_KEY}`)
                }
                else{
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}`)
                }
                const data = await axios.get(`${apiKey}`);
                setData(data.data.results);

            } catch (err) {
                console.log(`list page error : ${err}`)
            }
        };
        fetchData();
    }, [type, apiKey, name]);
    console.log(data);
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${(230 + distance)}px)`;
            listRef.current.style.transition = `all 0.5s ease`;
            setSlideNumber(prev => prev - 1);
        }
        if (direction === "right" && slideNumber < 10) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(prev => prev + 1);

        }
    }
    return (
        <div className='list'>
            <span className="listTitle">{name} </span>
            <div className="wrapper">
                {slideNumber > 0 && (

                    <ArrowBackIosOutlined className='arrow left' onClick={() => handleClick("left")} />
                )}
                <div className="container" ref={listRef}>
                    {/* <ListItem index="0"/>
                <ListItem index="1"/>
                <ListItem index="2"/>
                <ListItem index="3"/>
                <ListItem index="4"/>
                <ListItem index="5"/>
                <ListItem index="6"/>
                <ListItem index="7"/>
                <ListItem index="8"/>
                <ListItem index="9"/>
                <ListItem index="10"/> */}
                    {/* {data.map(d=>(
                     <h1>{d.original_title} </h1>
                ))} */}
                    {/* {data.map((d)=>(
                    <ListItem data={d} />
                ))} */}
                    {/* {data.results.map(d=>{return(
                    <h1>hello</h1>
                )})} */}
                    {data.filter((d) => { return d.media_type === type && d.genre_ids.some((e) => { return e === parseInt(genre) }) }).map((d) => (
                        <ListItem data={d} />
                    ))}

                </div>
                {slideNumber < 5 && (

                    <ArrowForwardIosOutlined className='arrow right' onClick={() => handleClick("right")} />
                )}
            </div>
        </div>
    )
}

export default List