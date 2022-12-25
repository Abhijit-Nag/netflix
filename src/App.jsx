import Home from "./home/Home";
import "./app.scss"
import Register from "./components/register/Register";
import Accordian from "./components/accordians/Accordian";
import Footer from "./components/footer/Footer";
import Others from "./components/others/Others";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Video from "./components/video/Video";
function App() {
  console.log(`this is the api in app_js file : ${process.env.REACT_APP_API_KEY}`)
  return (
    // <Home/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} / >
        <Route path="video" element={<Video/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
