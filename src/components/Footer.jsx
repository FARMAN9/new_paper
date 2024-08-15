import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <hr />
    <div class="footer-container">

        <div class="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-globe"></i> Portfolio
            </a>
        </div>
        <p>&copy; 2024 Syed Farman ali. All rights reserved.</p>
    </div>
</footer>

              
       
  )
}

export default Footer