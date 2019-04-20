import React, { Component } from 'react'
import Card from './Card'



class Backdrop extends Component {
    render() {
        return (
            <div className='backdrop-style'>
                <div className='card-holder'>
                    <Card />
                </div>
            </div>
        )
    }
}




export default Backdrop