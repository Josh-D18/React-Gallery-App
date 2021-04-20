import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

export default class PhotoContainer extends React.Component{
    
    render(){
        return (
            <div className="photo-container">
            <h2>Results</h2>
                <SearchForm />
                <Photo />
                {/* <!-- Not Found --> */}
                <NotFound />
            
            </div>
        )
    }
}