import React from 'react';
import ReactDom from 'react-dom';
import Nav from '../components/nav';

var PictureDetails = React.createClass({
    getInitialState(){
        return {
            username : ''
        }

    },
    showUserName(e){
        this.setState({
            username: e.target.value
        })
    },
    render(){
        return(
            <div>
                <Nav />
                <div class='jumbotron col-sm-6 col-sm-offset-3 text-center'>

                    <h1>{this.state.username}</h1>
                    <div class='col-sm-12'>
                        <form onSubmit={this.onSubmitUser}>
                            <div class='form-group'>
                                <input
                                    class='form-control'
                                    placeholder='comment'
                                    type='text'
                                    onChange={this.showUserName}
                                    value={this.state.username} />
                            </div>
                            <div class='form-group col-sm-4 col-sm-offset-4'>
                                <button
                                    class='btm btn-block btn-succes'
                                    type='submit'>
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = PictureDetails;