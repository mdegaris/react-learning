import React from 'react';

const TableRow = ({ rowData }) => {
  console.log('rowData', rowData);
  return (
    <tr>
      {!!rowData && rowData.map((data, index) => <td key={index}>{data}</td>)}
    </tr>
  );
};

export default TableRow;
