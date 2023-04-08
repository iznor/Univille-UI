import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { P } from '../../../components';

export const LocationsTable = (props: { rows }) => {
  return (
    <>
      <P>Selected Locations: </P>
      <Table sx={{ maxWidth: '100%' }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell variant="head" sx={{ width: '5%' }}>
              ID
            </TableCell>
            <TableCell variant="head" sx={{ width: '20%' }}>
              Location Name
            </TableCell>
            <TableCell variant="head" sx={{ width: '65%' }}>
              Hint
            </TableCell>
            <TableCell variant="head" sx={{ width: '5%' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.rows}</TableBody>
      </Table>
    </>
  );
};
