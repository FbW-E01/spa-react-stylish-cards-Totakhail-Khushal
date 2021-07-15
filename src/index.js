import ReactDOM from "react-dom";
import CardOne from "./components/CardOne"
import MainClasses from "./main.jsx";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapCard from "./components/BootstrapCard";
import StyledCard from "./components/StyledCard";




ReactDOM.render(
   <div> 
       <CardOne/>
       <MainClasses />
       <BootstrapCard/>
       <StyledCard/>
       
   
   </div>,
    document.getElementById("root")

);