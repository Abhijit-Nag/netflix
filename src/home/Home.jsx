import { AcUnit } from '@material-ui/icons'
import React, { useState } from 'react'
import Featured from '../components/featured/Featured'
import Footer from '../components/footer/Footer'
import List from '../components/list/List'
import Navbar from '../components/navbar/Navbar'
import "./home.scss"


const Home = () => {
  const [type, setType]= useState("movie");
  const [genre, setGenre]= useState(35);
  console.log(`this is the genre selected : ${genre} this is the type: ${type}`)
  return (
    <div className='home'>
        <Navbar setType={setType} />
        
         <Featured type={type} setGenre={setGenre} />
         <List name="Continue to Watch" type={type} genre={genre} />
         <List name="Popular on JMedia" type={type} genre={genre} />
         <List name="Popular in your Country" type={type} genre={genre} />
         <List name="Finish this weekend" type={type} genre={genre} />
         <Footer/>
        
    </div>
  )
}

export default Home