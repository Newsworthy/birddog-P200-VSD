import React from 'react'
import '../../App.css';

function Footer() {
    return (
        <div>
            <footer style={footerStyle}>
                <p>BirdDog P200 VSD - © Newsworthy Vision Ltd. 2020, <a href="mailto:development@newsworthyvision.com" target="_blank" rel="noopener noreferrer">development@newsworthyvision.com</a>
                </p>
            </footer>
        </div>
    )
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '10px',
    fontSize: '0.70rem',
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
}

export default Footer
