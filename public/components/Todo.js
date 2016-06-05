import React from 'react';
import ReactDom from 'react-dom';
import Nav from './nav';
import {IndexLink, Link} from 'react-router';
import store from  '../states/state';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadIssues} from './actions';

var todos = [
    {
        completed: false,
        todoId: 1,
        text: 'Task 1'
    },
    {
        completed: false,
        todoId: 2,
        text: 'Task 2'
    },
    {
        completed: false,
        todoId: 3,
        text: 'Task 3'
    }
];

export default class TodoList extends React.Component{
    handleChange(){
        const completed = true;
        this.props.changeCompleted(completed);
        console.log('work!');
    }
    INCREASE_COUNTER(){
        store.dispatch({
            type: 'INCREASE_COUNTER',
        });
    }

    render(){
       return(
           <ul>
               <li style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                   {this.props.text}
               </li>
           </ul>
       )
   }
}

class Todo extends React.Component{
    constructor() {
        super();
        this.state = { completed: false};
    }
    changeCompleted(completed){
        this.setState({completed})
    };
    handleClick(){
        this.props.loadIssues();
    }
    ISSUES_LOADED(){
        store.dispatch({
            type:'ISSUES_LOADED',
        })
    }
    render(){
        return(
            <div>
                <button onClick={::this.handleClick}>Load issues</button>
                <ul>

                    {this.props.issues.map((issue) => <li key={issue.id}>{issue.title}</li>)}

                </ul>
                <TodoList completed={this.state.completed}
                           key={todos[0].todoId}
                           todoId={todos[0].todoId}
                           text={todos[0].text} >

                </TodoList>
            </div>
        )
    }
}
export default connect (
    (state) => { return {counter: state.counter, issues: state.issues};},
    (dispatch) => bindActionCreators({loadIssues}, dispatch)
)(Todo)