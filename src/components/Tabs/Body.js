import React, { Component } from 'react';
import Table from '../Table';

export default class Head extends Component {
    render(){
    	return(
    		<div class={"tab-pane "+this.props.state} id={this.props.tabname}>
                <div class="panel panel-primary filterable">
		    		<Table tbody={this.props.tbody} /> 
			    </div>
		    </div>
    	);
    }
}
