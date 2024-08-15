import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <hr />
    <div class="footer-container">

        <div class="social-icons">
            <a href="https://github.com/farman9" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/farman9" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            LinkedIn
            </a>
            <a href="https://portfolio-react-theta-steel.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FaGlobe /> Portfolio
            </a>
        </div>
        <p>&copy; 2024 Syed Farman ali. All rights reserved.</p>
    </div>
</footer>

              
       
  )
}

export default Footer