import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div className='parent'>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1778409445285-2c63c0c2ecca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
                <h1>{props.user}{props.age}</h1>
                <p>ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>view profile</button>
            </div>
           
            
        </div>
    )
}

export default Card
