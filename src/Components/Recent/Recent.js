import React from 'react';
import { Cell } from 'fixed-data-table';

const RecentPoints = ({ rowIndex, data, field, ...props }) => (
  <Cell { ...props }>
    { data[rowIndex][field]}
  </Cell>
);

export default RecentPoints;