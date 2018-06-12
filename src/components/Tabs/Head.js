import React, { Component } from 'react';

export default class Head extends Component {
    render(){
    	return(
            <li class={this.props.state}>
                <a href={"#"+this.props.tabname} data-toggle="tab"> {this.props.heading} </a>
            </li>
    	);
    }
}
