import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../env/api'
import "./featured.scss"

const Featured = ({ type , setGenre}) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${api}&language=en-US`);
        console.log(data.data.genres[1]);
        setGenres(data.data.genres);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [type])
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option>Comedy</option>
            {genres.map(d => (
              <option id={d.id} value={d.id} >{d.name} </option>
            ))}


          </select>
        </div>
      )}
      <img
        src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
        alt="" />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Interstellar-logo.png"
          alt=""
          style={{ width: "auto" }}
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ullam, nemo quidem debitis quasi dignissimos
          voluptatem, magni voluptas ex nulla dolor hic aliquam totam adipisci
          animi perspiciatis repellendus est similique dolorum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured