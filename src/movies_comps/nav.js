import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../App.css";
class Nav extends Component{

    render(){

        return(
            <div className="navStyler container mr-2">              
                <Link className="btn btn-primary m-2" to="/">Home</Link>
                <Link className="btn btn-primary m-2" to="/popular">Popular</Link>
                <Link className="btn btn-primary m-2" to="/topRated">Top Rated</Link>
                <Link className="btn btn-primary m-2" to="/upComing">Up Coming</Link>
            </div>
        )
    }
}

export default Nav;