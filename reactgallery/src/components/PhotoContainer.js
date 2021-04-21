import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends React.Component{
    
    render(){
        return (
            <div className="photo-container">
            <h2>Results</h2>
                <Photo />
                {/* <!-- Not Found --> */}
                <NotFound />
            </div>
        )
    }
}