import React, { Component } from 'react';

export default class Card extends Component {
    render(){
    	  return(
                <div class={this.props.color}  style={{float: 'left', width: '25%', height: '100%'}}>
                    <div class="inner">
                        <h3>{this.props.number}</h3>
                          <p>{this.props.measure}</p>
                        </div>
                        <div class="icon">
                          <i class={this.props.icon}></i>
                        </div>
                        <a href="#" class="small-box-footer"> {this.props.title} <i class="fa fa-arrow-circle-right"></i></a>
                </div>
    	  );
    }
}
