import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = ({setType}) => {
    const [scroll, setScroll] = useState(false);
    console.log(window.pageYOffset)
    useEffect(()=>{
        window.onscroll = () => {
        window.pageYOffset === 0 ? setScroll(false) : setScroll(true);
        //  return()=> (window.onscroll=null)
    };
    },[])
    
    console.log(scroll)
    return (
        <div className={scroll ? "navbar scroll" : "navbar"}
        // style={{backgroundColor:`${scroll & "transparent"}`}}
        >
            <div className="container">
                <div className="left">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" /> */}

                    <div className="logo">
                        JMedia+
                    </div>
                    <span onClick={()=>setType("")}>Homepage</span>
                    <span onClick={()=> setType("Series")}>Series</span>
                    <span onClick={()=> setType("Movies")}>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span><Link className='link' to="/" >Logout</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar