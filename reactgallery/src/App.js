import './css/index.css'
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import apiKey from '../config.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';


// API Request
const key = apiKey;

function getApiFunction () {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&auth_token=72157718990391011-547765c47ae4f80f&api_sig=305275fb6820cb25a6d3bd5728c9bf2e`)
  .then(res => {
    console.log(res.data)
  })
  
}


function App() {
  getApiFunction()
  return (
    <Router>
      <div className="container">
      <Switch>
        <Route exact path="/">
          <SearchForm />
          <Nav />
          <PhotoContainer />
        </Route>
        <Route path="/?search">
          <SearchForm />
          <Nav />
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

export default App;
