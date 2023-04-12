import React from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { H3, P } from '../../../components';

export const LocationsTable = (props: { rows }) => {
  return (
    <Card sx={{ padding: '15px', marginBottom: '15px' }}>
      <H3>Locations</H3>
      {/* <P>Selected Locations: </P> */}
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
    </Card>
  );
};
