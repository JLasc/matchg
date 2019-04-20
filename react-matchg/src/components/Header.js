import React from 'react'
import darkhoney from "../assets/images/dark-honeycomb.png"

const Header = () => {
    const style = {
        matchFont: {
            fontSize: "2.5vw",
            fontWeight: "bold",
            fontFamily: "Broadway, serif",
            letterSpacing: ".5px"
        },
        navBg: {
            backgroundColor: "#575366",
            color: "#D1E3DD",
        },
        jumboStyle: {
            margin: "0px",
            backgroundImage: `url(${darkhoney})`
        }
    }
    return (
        <div>
            <nav style={style.navBg} className="navbar navbar-light justify-content-between">
                <a className="navbar-brand navFontSize" style={style.matchFont}> Matching Game</a>
                <span className='mr-sm-1 navFontSize' style={{ fontSize: "2.5vw" }}>Click an image to begin!</span>
                <span className="mr-sm-2 navFontSize" style={{ fontSize: '2.5vw' }}>Score: 0 | Top Score: 0</span>
            </nav>
            <div class="jumbotron jumbotron-fluid text-white" style={style.jumboStyle}>
                <div class="container text-center">
                    <p class="lead">Click on an image to earn points! Do not click the same picture twice.</p>
                </div>
            </div>
        </div>
    )
}


export default Header;