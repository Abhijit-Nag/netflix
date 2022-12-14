import React from 'react'
import Accordian from '../../components/accordians/Accordian'
import Footer from '../../components/footer/Footer'
import Others from '../../components/others/Others'
import Register from '../../components/register/Register'
import "./mainPage.scss"

const MainPage = () => {
  return (
    <>
    <Register/>
    <Others/>
    <Accordian/>
    <hr style={{height:"8px" , backgroundColor:"rgb(49, 47, 47)", border:"none",}} />
    <Footer/>
    </>
  )
}

export default MainPage