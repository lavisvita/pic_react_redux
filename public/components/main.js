import React, {Component} from "react";
import ReactDOM from "react-dom";
import Nav from './nav';
import Todo from './Todo';
import Pictures from "../components/pictures";

class Main extends Component{
    render(){
        return (
            <div>
                <Nav />
                <Todo>
                    {this.props.counter}
                </Todo>
                <p>Hello, {this.props.counter}</p>
                <div class='header-index-pics-comments'>
                    <p>Pics Comments</p>
                    <img src='/public/img/Comments.jpg' width='400' />
                </div>
            </div>
        )
    }
}
export default Main;