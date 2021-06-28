import React from "react"
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = ({ phrase, link, toAddress}) => {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toAddress} className="footer-link-element">
                {link}
            </Link>
        </div>
    );
}

export default Footer;