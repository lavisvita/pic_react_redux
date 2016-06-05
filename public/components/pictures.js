import React from 'react';
import ReactDom from 'react-dom';
import Nav from './nav';
import {IndexLink, Link} from 'react-router';
var pictures = [
    {
        pictureId: 1,
        filename: '6230047_xlarge.jpg'
    },
    {
        pictureId: 2,
        filename: 'sample2.jpg'
    },
];

class PictureLink extends React.Component{
    render(){

        return(
            <div>
                <span>
                    <Link  to={'/pictures/' + this.props.link} >
                        <img  width='300' src={'public/img/' + this.props.children} />
                    </Link>
                </span>
            </div>
        );
    }
}

class PictureDisplay extends React.Component{
    propTypes: {
        pictureId: React.PropTypes.number.isRequired,
        filename: React.PropTypes.string.isRequired
    };

    showPicture(e){
        e.preventDefault();
        this.setState({
            visible: this.props.visible,
        });
    }
render(){
        return(
            <div >
                <span class={this.props.showPicture}>
                    <PictureLink  link={this.props.pictureId}>
                        {this.props.filename}
                    </PictureLink>
                </span>
            </div>
        )
    }
}

class Pictures extends React.Component{
    constructor() {
        super();
        this.state = { visible: true }
    }

    render(){
        var PictureVisible=this.state.visible ? 'visibleTrue' : 'visibleFalse';
        console.log(PictureVisible);
        var pictureList = pictures.map(function(picture){
            return (<PictureDisplay showPicture={PictureVisible} key={picture.pictureId} pictureId={picture.pictureId} filename={picture.filename} />);
        });

        return (
            <div>
                <Nav />
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        {pictureList}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Pictures;