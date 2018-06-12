import React, { Component } from 'react';
import Card from './Summary/Card';

export default class Summary extends Component {
    render(){
    	return(
    		<section className="content-header">
                <div class='cardcontainer'>
                    {this.props.cards.map(c => <Card key={c.n} title={c.title} number={c.number}  measure={c.measure} color={c.color} icon={c.icon} />)}
                </div>
            </section>
    	);
    }
}
