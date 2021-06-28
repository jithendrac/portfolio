import React from "react"
import "./Home.css"
import { Link } from 'react-router-dom'
import homeAnime from './../../assets/home_anime.gif'
import Modal from "../Modal/Modal"

class Home extends React.Component{
    render() {
      return (
        <div className="home-container">
            <div className="header-text">
              <h1>Welcome to Jithendra's Portfolio</h1>
              <p>This is Jithendra C, Frontend Developer, a avid learner and a curious mind to know what happens behind everything.</p>
            </div>
            <div className="head-btns">
              <Link to="/about" className="btn">
                <p className='btn-text'>Know More About Me</p>
              </Link>
              <Link to='/contact' className='btn'>
                <p className="btn-text">Connect With Me</p>
              </Link>
            </div>
            <div className="splash-image">
              <img src={homeAnime} alt='Home Gif' className="home-anime"/>
            </div>
        </div>
      );
    }
}

export default Home;