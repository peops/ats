import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
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
                <section className="content-header">
                    <div class="tablecontainer">
                        <div class="row">
                            <div class="col-md-12">
                                <span class="heading"> Schedule </span>
                                <div class="tabbable-panel">
                                    <div class="tabbable-line">
                                        <ul class="nav nav-tabs ">
                                            <li class="active">
                                                <a href="#tab_default_1" data-toggle="tab">
                                                Feedback Due </a>
                                            </li>
                                            <li>
                                                <a href="#tab_default_2" data-toggle="tab">
                                                Today </a>
                                            </li>
                                            <li>
                                                <a href="#tab_default_3" data-toggle="tab">
                                                Upcoming </a>
                                            </li>
                                            <li>
                                                <a href="#tab_default_4" data-toggle="tab">
                                                Completed </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab_default_1">

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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div class="tab-pane" id="tab_default_2">
                                                
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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div class="tab-pane" id="tab_default_3">
                                                
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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div class="tab-pane" id="tab_default_3">
                                                
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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-header">
                    <span class="heading"> Offer to hire - Highlights - Last 30 Days</span>
                    <div class='cardcontainer'>
                      <div class='card carda'>
                        <div class='inner'>
                          <div class='title'>
                            <div class='text'>Offers Made</div>
                          </div>
                          <div class='number'>22</div>
                          <div class='measure'></div>
                        </div>
                      </div>
                      <div class='card cardb'>
                        <div class='inner'>
                          <div class='title'>
                            <div class='text'>Offers Accepted</div>
                          </div>
                          <div class='number'>45</div>
                          <div class='measure'></div>
                        </div>
                      </div>
                      <div class='card cardc'>
                        <div class='inner'>
                          <div class='title'>
                            <div class='text'>Offers Declined</div>
                          </div>
                          <div class='number'>45</div>
                          <div class='measure'></div>
                        </div>
                      </div>
                      <div class='card cardd'>
                        <div class='inner'>
                          <div class='title'>
                            <div class='text'>New Joinees</div>
                          </div>
                          <div class='number'>45</div>
                          <div class='measure'></div>
                        </div>
                      </div>
                    </div>
                </section>

            </div>
        )
    }
}