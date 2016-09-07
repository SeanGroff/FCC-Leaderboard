import React from 'react';
import { Cell } from 'fixed-data-table';

const Campers = ({ rowIndex, data, field, ...props }) => (
  <Cell { ...props }>
    { data[rowIndex][field] }
  </Cell>
);

export default Campers;