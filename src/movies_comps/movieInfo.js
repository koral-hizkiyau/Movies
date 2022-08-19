import React,{Component} from "react";
import "../css/dark.css";

class MovieInfo extends Component{

     closeDark = (event) => {
        // document.getElementById("info").className = 'd-none'; 
        event.currentTarget.classList.toggle('active');

    }
    // handleClick = event => {
    //     event.currentTarget.classList.toggle('active');
    //   }
    //    // clickMoreInfo = () => {
    // //     document.getElementById("info").className = 'd-flex'; 
    // // }

    render(){

        let {release_date,vote_average,popularity,vote_count} = this.props.item;
        return(
            <div id="id_dark"  >
            <div className="dark_inside  text-center">
            <p><b>Release Date:</b> {release_date}</p>
            <p><b>Popularity:</b> {popularity}</p>

            <p> <b>Vote Average:</b> {vote_average}</p>    
            <p> <b>Vote Count:</b> {vote_count}</p>            
        
                <div onClick={this.closeDark}>
                <button className="movieBtn btn btn-danger mb-3" >Close</button></div>
        </div>
            </div> 
                    )
    }
}

export default MovieInfo;