import React from 'react'
import Project from './Project';
import { image4, image7, image6 }from "./Images.js"


const ProjectsDetails = [
    {
     id:1,
     imageUrl:image4,
     name:'PORT HARCOURT GARDENS EXOTIC ESTATE AT G. R. A. PORT HARCOURT',
     link:'portharcourt-gardens'
    },
    {
     id:2,
     imageUrl:image6,
     name:'NEW BUSSA, NIGER STATE TOWNSHIP ROAD REHABILITATION',
     link:'new-bussa-rd'
    },
    {
     id:3,
     imageUrl:image7,
     name:'PARADISE GARDEN ESTATE AT ELIOZU TOWN',
     link:'paradise-estate-gardens'
    } 
]

export default function Projects() {
    return ( 

        <div>
            {ProjectsDetails.map( (project, index)=> 
            <Project
            name={project.name}
            imageUrl={project.imageUrl}
            link={project.link}
            id={index}
            />)}
        </div>
     
     );
}

