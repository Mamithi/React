import React from 'react'

const Conditional = () => {

    const returnValue = () => {
        return true
    }

    const showIt = () => {
        return ( returnValue() ?
            <div>Hello, its true</div> : 
            <div>Hello, its false</div>
        )
    }
    return (
        <div>
            { showIt() }
        </div>
    )

}

export default Conditional