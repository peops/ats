import React, {Component} from 'react';
import Summary from './Summary';
import Tabs from './Tabs'

export default class Main extends Component {
    candisummary = [
                {n:"1", title:"New Candidates", number:"5", measure:"Applcants", color:"small-box bg-aqua", icon:"ion ion-bag"},
                {n:"2", title:"Candidates Responded", number:"2", measure:"Applicants", color:"small-box bg-green", icon:"ion ion-stats-bars"},
                {n:"3", title:"Waiting for Actions", number:"5", measure:"Tasks", color:"small-box bg-yellow", icon:"ion ion-person-add"},
                {n:"4", title:"Tasks", number:"3", measure:"Tasks", color:"small-box bg-red", icon:"ion ion-pie-graph"}
            ];

    headings = [
                {state:"active", tabname:"1", heading:"Feedback Due"}, 
                {state:"", tabname:"2", heading:"Today"},
                {state:"", tabname:"3", heading:"Upcoming"},
                {state:"", tabname:"4", heading:"Completed"}

            ]
    tbody = [
                {candidate:"Ankit", info:"Stud", schedule:"Anytime", remarks:"Le le"},
                {candidate:"Ankit", info:"Stud", schedule:"Anytime", remarks:"Le le"},
                {candidate:"Ankit", info:"Stud", schedule:"Anytime", remarks:"Le le"}
            ];
    contents = [
                {state:"active", tabname:"1", theading:this.theading, tbody:this.tbody},
                {state:"", tabname:"1", tbody:this.tbody},
                {state:"", tabname:"1", tbody:this.tbody},
                {state:"", tabname:"1", tbody:this.tbody}
            ]
    render(){
        return (
                <div className="content-wrapper">
                <section class="content-header">
                    <h1>
                    <span class='small'>
                    Dashboard
                    </span>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Dashboard</li>
                    </ol>
                </section>
                <section class="content">
                    <Summary cards={this.candisummary} />
                    <Tabs headings={this.headings} contents={this.contents} />
                </section>
                </div>
        )
    }
}