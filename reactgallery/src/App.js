import './css/index.css'
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import apiKey from './config.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
import React from 'react';



  // API Request

  const key = apiKey;



class App extends React.Component {
  state = {
    pics: [],
    dogPics: [],
    catPics:[],
    computerPics:[],
    searchPics:[]
  }
  

  // Get data from the api and add photo objects to state
  componentDidMount () {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=fish&per_page=24&format=json&nojsoncallback=1`)
      
    .then(res => {
        this.setState({
          pics: res.data.photos.photo
        })
        return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      })

      .then(res => {
        this.setState({
          dogPics : res.data.photos.photo
        })
        return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      })
      
      .then(res => {
        this.setState({
          catPics : res.data.photos.photo
        })
        return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      })
      
      .then(res => {
        this.setState({
          computerPics : res.data.photos.photo
        })
      })
  
      .catch(error => {
        console.error('Error', error);
      })
  }


  // Search Form Function 
  performSearch(query){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          searchPics: res.data.photos.photo
        })
      }).catch(err => {
        console.error('There has been an error', err)
      })
  }

  render(){
    return (
      <Router>
        <div className="container">
          <SearchForm onSearch={this.performSearch.bind(this)}/>    
          <Nav />
          <Switch>
            <Route exact path="/" component={() => (<PhotoContainer data={this.state.pics}/>)} />

            <Route exact path="/dogs" component={() => (<PhotoContainer data={this.state.dogPics}/>)} />
              
            
            <Route exact path="/cats" component={() => (<PhotoContainer data={this.state.catPics}/>)} />

            <Route exact path="/computers" component={() => (<PhotoContainer data={this.state.computerPics}/>)} />
            
            <Route path="/search/query" render={()=>(
              <PhotoContainer data={this.state.searchPics} />
            )}/>

            <Route component={() => (<NotFound />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
