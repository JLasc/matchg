import React from 'react'

const ImageCard = props => {
    return (
        <div className='container drop'>
            {props.data.map(item => {
                return (
                    <img className='img-thumbnail' src={item.src} data-id={item.id} />
                )
            })}
        </div>
    )
}

export default ImageCard