import React,{Component} from "react";
import "../css/movieItem.css"
// import MovieInfo from "./movieInfo";
import "../css/dark.css";
import MovieInfo from "./movieInfo";
class MovieItem extends Component {

    handleClick = event => {
        event.currentTarget.classList.toggle('active');
      }

    

    render(){
        let {original_title,poster_path,overview} = this.props.item;
        
        return(
            <div className="col-lg-6 border">
             <h2 className="text-center py-3">{original_title}</h2>
             <div className="row">
            <div className="col-lg-6">
            <img src={'https://image.tmdb.org/t/p/w500'+poster_path} id="movieImg" className="w-75 float-left" alt={original_title}/></div>
            <div className="col-lg-6">
            <div id="movieOverView">{overview}</div>
            <div className="movie btn btn-primary" onClick={this.handleClick}><b>More Info</b>
            <div id="info" className="opening container-fluid">
                <MovieInfo item={this.props.item} /></div>
            </div>            </div>
            </div>
         </div>          

        )
    }
}

export default MovieItem;