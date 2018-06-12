import React from 'react';
import IconPaginationTable from './Table/icon-pagination-table';

export default class Table extends React.Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <IconPaginationTable tbody={this.props.tbody} />
        </div>
      </div>
    );
  }
}
