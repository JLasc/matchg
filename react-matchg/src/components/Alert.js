import React from 'react'

const alertSystem = {
    dangerAlert: () => {
        return (
            <div class="alert alert-danger text-center" role="alert">
                You have already clicked that shield. You lose!
            </div>
        )
    },
    successAlert: () => {
        return (
            <div class="alert alert-success text-center" role="alert">
                You have Won!
           </div>
        )
    }
}

export default alertSystem