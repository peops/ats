import React, { Component } from 'react';
import Head from './Tabs/Head';
import Body from './Tabs/Body';

export default class Tabs extends Component {
    render(){
    	return(
    		<section className="content-header">
                <div class="tablecontainer">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="tabbable-panel">
                                <div class="tabbable-line">

                                    <ul class="nav nav-tabs ">
                                        {this.props.headings.map(c => <Head key={c.n} state={c.state} tabname={c.tabname}  heading={c.heading} />)}
                                    </ul>

						    		<div class="tab-content">
						                {this.props.contents.map(c => <Body key={c.n} state={c.state} tabname={c.tabname}  tbody={c.tbody} />)}
									</div>

								</div>
					        </div>
						</div>
					</div>
				</div>
			</section>
    	);
    }
}

