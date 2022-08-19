import React,{Component} from "react";
import './App.css';
import AppMovie from './movies_comps/appMovie';
import {BrowserRouter as Router, Route ,Routes   } from "react-router-dom";
import Nav from "./movies_comps/nav";
import MoviePopular from "./movies_comps/moviePopular";
import Search from "./movies_comps/search";
import { doApi } from "./service/apiSerGet";
import MovieUpComing from "./movies_comps/movieUpComing";
import MovieTopRated from "./movies_comps/movieTopPopular";


class App extends Component {
  state = {_ar:[]}

  searchMovie = (_val) => {
    let url =`https://api.themoviedb.org/3/search/movie?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US&query=${_val}`;
    doApi(url)
    .then(data => {
        this.setState({_ar:data.results})
    })
}
render(){
  return (
    <Router>
    <div className="App" style={{backgroundColor:"#B3B3B3"}}>
      <h1 className="titleApp py-3">Movies</h1>
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
        <Nav/>
        </div>
        <div className="searchStyler col-lg-6">
        <Search searchMovie={this.searchMovie} /> 
        </div>
      </div></div>
      <Routes >
        <Route path="/" element={<AppMovie _ar={this.state._ar} />}/>
        <Route path="/popular" element={<MoviePopular _ar={this.state._ar}/>}/>
        <Route path="/topRated" element={<MovieTopRated _ar={this.state._ar}/>}/>
        <Route path="/upComing" element={<MovieUpComing _ar={this.state._ar}/>}/>
        </Routes>
    </div>
    </Router>
  );
}
}

export default App;
