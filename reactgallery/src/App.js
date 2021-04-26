import './css/index.css'
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import apiKey from './config.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import React from 'react';



  // API Request

  const key = apiKey;



class App extends React.Component {
  state = {
    pics: []
  }
  
  componentDidMount () {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=fish&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        console.log(res.data.photos.photo)
        this.setState({
          pics: res.data.photos.photo
        })
      }).catch(error => {
        console.error('Error', error);
      })
  }

  render(){
    return (
      <Router>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/">
              <PhotoContainer data={this.state.pics}/>
            </Route> 
            <Route exact path="/dogs">
              <PhotoContainer data={this.state.pics}/>
            </Route>
            <Route exact path="/cats">
              <PhotoContainer />
            </Route>
            <Route exact path="/computers">
              <PhotoContainer />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
