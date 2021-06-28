import React from 'react'
import { withRouter } from 'react-router'
import "./GoHome.css"
import homeWhite from './../../assets/home_white.png'
import homeBlack from './../../assets/home_black.png'


class GoHome extends React.Component{

    navigateToHome = () => {
        const { history }= this.props;
        history.push('/')
    }

     render() {
         return (
             <button onClick={this.navigateToHome} className="go-home-btn">
                    <img className="home-icon" src={homeBlack}></img>
             </button>
         )
     }
}

export default withRouter(GoHome)