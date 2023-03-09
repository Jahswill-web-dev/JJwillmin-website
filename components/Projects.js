import React from 'react'
import Project from './Project';
// import { getImages } from '../pages/api/cloudinary';
// import { getImageSize } from 'next/dist/server/image-optimizer';
const ProjectsDetails = [
    {
     id:1,
     face:'sm:flex-row-reverse',
     imageUrl:'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324251/J.%20J.%20WILLMIN%20Images/image-4_nyoj8m.png',
     name:'PORT HARCOURT GARDENS EXOTIC ESTATE AT G. R. A. PORT HARCOURT',
     link:'portharcourt-gardens'
    },
    {
     id:2,
     face:'sm:flex-row',
     imageUrl:'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324235/J.%20J.%20WILLMIN%20Images/image-6_ekqnbf.png',
     name:'NEW BUSSA, NIGER STATE TOWNSHIP ROAD REHABILITATION',
     link:'new-bussa-rd'
    },
    {
     id:3,
     face:'sm:flex-row-reverse',
     imageUrl:'https://res.cloudinary.com/drpzv54qa/image/upload/v1677324235/J.%20J.%20WILLMIN%20Images/image-6_ekqnbf.png',
     name:'PARADISE GARDEN ESTATE AT ELIOZU TOWN',
     link:'paradise-estate-gardens'
    } 
]

export default function Projects({  }) {
    return ( 

        <div className="flex flex-col gap-16 mx-auto items-center justify-center">
            {ProjectsDetails.map( (project, index)=> 
            <Project
            key={index}
            name={project.name}
            imageUrl={project.imageUrl}
            link={project.link}
            id={index}
            face={project.face}
            />)}
        </div>
     
     );
}


