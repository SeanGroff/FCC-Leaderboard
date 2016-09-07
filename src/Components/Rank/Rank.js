import React from 'react';
import { Cell } from 'fixed-data-table';

const Rank = ({ rowIndex, data, field, ...props }) => (
  <Cell { ...props }>
    { rowIndex + 1 }
  </Cell>
);

export default Rank;