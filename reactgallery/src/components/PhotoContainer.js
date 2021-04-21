import React from 'react';
import Photo from './Photo';

export default class PhotoContainer extends React.Component{
    
    render(){
        return (
            <div className="photo-container">
            <h2>Results</h2>
                <Photo />
            </div>
        )
    }
}