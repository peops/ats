/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class IconPaginationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableOptions = {
      prePage: <i className='glyphicon glyphicon-chevron-left' />,
      nextPage: <i className='glyphicon glyphicon-chevron-right' />,
      firstPage: <i className='glyphicon glyphicon-step-backward' />,
      lastPage: <i className='glyphicon glyphicon-step-forward' />
    };

    return (
      <div>
        <BootstrapTable data={ this.props.tbody } options={ tableOptions } pagination>
          <TableHeaderColumn dataField='candidate' width='25%' isKey={true}>Candidate</TableHeaderColumn>
          <TableHeaderColumn dataField='info' width='25%'>Info</TableHeaderColumn>
          <TableHeaderColumn dataField='schedule' width='25%'>Schedule</TableHeaderColumn>
          <TableHeaderColumn dataField='remarks' width='25%'>Remarks</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

          
