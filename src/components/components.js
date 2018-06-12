import React, { Component } from 'react';

export default class candidateSummary extends Component {
    render(){
    	return(
    		<section className="content-header">
                <span class="heading"> Candidates Summary</span>
                <div class='cardcontainer'>
                  <div class='card carda'>
                    <div class='inner'>
                      <div class='title'>
                        <div class='text'>New Candidates</div>
                      </div>
                      <div class='number'>22</div>
                      <div class='measure'></div>
                    </div>
                  </div>
                  <div class='card cardb'>
                    <div class='inner'>
                      <div class='title'>
                        <div class='text'>Candidates Responded</div>
                      </div>
                      <div class='number'>45</div>
                      <div class='measure'></div>
                    </div>
                  </div>
                  <div class='card cardc'>
                    <div class='inner'>
                      <div class='title'>
                        <div class='text'>Waiting For Action</div>
                      </div>
                      <div class='number'>45</div>
                      <div class='measure'></div>
                    </div>
                  </div>
                  <div class='card cardd'>
                    <div class='inner'>
                      <div class='title'>
                        <div class='text'>Due Tasks</div>
                      </div>
                      <div class='number'>45</div>
                      <div class='measure'></div>
                    </div>
                  </div>
                </div>
            </section>
    	);
    }
}

export default class TableRow extends Component {
    render(){
    	return(
    		<tr>
                <td>{this.candidate}</td>
                <td>{this.interviewer}</td>
                <td>{this.schedule}</td>
                <td>{this.note}</td>
            </tr>
    	);
    }
}

export default class Table extends Component {
    render(){
    	return(
			<div class="panel panel-primary filterable">
                <table class="table">
                    <thead  class="blue-grey lighten-4">
                        <tr class="filters">
                            <th>Candidate</th>
                            <th>Interviewer</th>
                            <th>Schedule Info</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow />
                    </tbody>
                </table>
            </div>
    	);
    }
}
