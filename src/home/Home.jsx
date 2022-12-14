import { AcUnit } from '@material-ui/icons'
import React, { useState } from 'react'
import Featured from '../components/featured/Featured'
import Footer from '../components/footer/Footer'
import List from '../components/list/List'
import Navbar from '../components/navbar/Navbar'
import "./home.scss"


const Home = () => {
  const [type, setType]= useState("");
  return (
    <div className='home'>
        <Navbar setType={setType} />
        
         <Featured type={type} />
         <List name="Continue to Watch" />
         <List name="Popular on JMedia" />
         <List name="Popular in your Country" />
         <List name="Finish this weekend" />
         <Footer/>
        
    </div>
  )
}

export default Home