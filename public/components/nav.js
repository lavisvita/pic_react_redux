import React from 'react';
import ReactDom from 'react-dom';
import {IndexLink, Link} from 'react-router';

class Nav extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="pictures">Pictures</Link></li>
                        <li><Link to="addpicture">Add Picture</Link></li>
                        <li><Link to="reg">Registration</Link></li>
                        <li><Link to="signin">Signin</Link></li>
                        <div class="pull-right"><span></span>
                            <ul class="nav navbar-nav">
                                <li><Link to="account">User account</Link></li>
                                <li><Link to="logout">Log out</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = Nav;