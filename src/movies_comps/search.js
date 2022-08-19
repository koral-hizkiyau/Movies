import React,{Component} from "react";
class Search extends Component{
inputSearch = React.createRef();

onSearchClick = () => {
    let userSearch = this.inputSearch.current.value;
    this.props.searchMovie(userSearch); 
}


    render(){
        return(
            <div className="col-lg-6 d-flex p-3">
                <input ref={this.inputSearch} type="text" className="form-control w-50" placeholder="Search Movie" />
                <button onClick={this.onSearchClick} className="btn btn-primary" >Search</button>
            </div>
        )
    }
}

export default Search;