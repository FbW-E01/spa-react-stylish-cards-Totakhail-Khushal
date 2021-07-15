import React from 'react'


import "./main.css"

function MainClasses (props){
    let className="classes"

    if(props.warning){
        className=className + ' classes-warning'
    }

    return <div className="wrapper">
     
             <img src="https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ" alt="" />

         <h4>I am SCSS</h4>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque, at voluptas eaque cum accusamus vero velit vel eos odit.</p>
      
         </div>
}

export default MainClasses