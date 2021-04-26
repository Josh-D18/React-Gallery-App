import React from 'react';
import Photo from './Photo';

export default function PhotoContainer(props) {
    return (
        <div className="photo-container">
        <h2>Results</h2>
            <Photo data={props.data}/>
        </div>
        )
}