import React from 'react'

function CardOne() {
    const cardStyle={
        display:"flex",
        justifyContent:"center",
         verticalAlign:"middle",
        fontSize:"15px",
        width:"40%",
        height:"30%",
        padding:"10",
        borderRadius:"20px",
        color:"white",
        boxShadow: "3px 19px 50px 7px #276873",
        background: "linear-gradient(to right, #DA4453, #89216B)",
    }
    return (
        <div>
            <h1 style={cardStyle}>I am a Regular CSS!!!! </h1>
        </div>
    )
}

export default CardOne
