import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({type}) => {
  return (
    <div className='featured'>
        { type && (
            <div className="category">
                <span>{type=== "Movies"? "Movies" : "Series"} </span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Adventure</option>
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
             style={{width:"auto"}}
              />
              <span className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ullam, nemo quidem debitis quasi dignissimos
                  voluptatem, magni voluptas ex nulla dolor hic aliquam totam adipisci
                   animi perspiciatis repellendus est similique dolorum?
              </span>
              <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
              </div>
         </div>
    </div>
  )
}

export default Featured