import React, {Component} from "react";
import { doApi } from "../service/apiSerGet";
import MovieItem from "./movieItem";


class MovieUpComing extends Component {
    state = {_ar:[]}

    componentDidMount(){
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US";
        doApi(url)
        .then(data => {
            this.setState({_ar:data.results});
        })
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState._ar !== previousProps._ar){          
            this.setState({_ar:previousProps._ar})
        }
    
       }
    
    render(){
        return(
            <div className="continer-fluid p-4">  
            <div className="container">                   
            <div className="row">
                {this.state._ar.map(item => {
                    return(                       
<MovieItem key={item.id} item={item} classChange={this.state.classChange}/>         
                )
                }
                )}
            </div>
            </div></div>        )
    }

}

export default MovieUpComing;