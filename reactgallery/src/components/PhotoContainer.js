import React from 'react';
import Photo from './Photo';

export default function PhotoContainer(props) {
    const results = props.data;
    
    let pics = results.map( pics => 
        <Photo data={pics} key={pics.id}/>
    )
    return (
        <div className="photo-container">
        <h2>Results</h2>
            <ul>
                { pics }
            </ul>
        </div>
        )
}