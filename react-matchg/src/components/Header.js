import React from 'react'

const Header = props => {
    return (
        <div>
            <nav className="navbar navbar-light justify-content-between header-navbg">
                <a className="navbar-brand navFontSize header-match-title header-font-size" > Matching Game</a>
                <span className='mr-sm-2 navFontSize header-font-size'>Score: {props.score} | Top Score: {props.topScore} </span>
            </nav>
            <div class="jumbotron jumbotron-fluid text-white jumboBg">
                <div class="container text-center">
                    <p class="lead">Click on an image to earn points!</p>
                    <p>Do not click the same picture twice.</p>
                </div>
            </div>
        </div>
    )
}


export default Header;