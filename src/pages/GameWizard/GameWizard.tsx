import React, { useEffect, useState } from 'react';
import { P } from '../../components';
import './GameWizard.scss';
import { LocationSelector } from './LocationSelector';
import { useLocationItems } from './hooks/useLocationItems';
import { LocationItem } from './consts';
import { DeleteTwoTone } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid/';

interface IGameWizard {}

const GameWizard = (props: IGameWizard) => {
  // const {} = props;
  const { itemsList, selectedItems, handleSelect, handleRemove } =
    useLocationItems();
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'hint',
      headerName: 'Hint',
      width: 600,
      editable: true,
      sortable: false,
      disableColumnMenu: true,
    },
  ];
  const rows = [];
  useEffect(() => {
    alert(JSON.stringify(rows));
  }, [rows]);
  selectedItems.forEach((item) => {
    rows.push({ id: rows.length + 1, Location: item.name, Hint: '' });
  });
  return (
    <>
      <LocationSelector
        itemsList={itemsList}
        selectedItems={selectedItems}
        selectItem={(item: LocationItem) => handleSelect(item)}
        removeItem={(item: LocationItem) => handleRemove(item)}
      />
      <P>Selected Locations: </P>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      {selectedItems.map((item) => (
        <p>
          {item.name}{' '}
          <DeleteTwoTone
            onClick={() => handleRemove(item)}
            cursor={'pointer'}
          />
        </p>
      ))}
    </>
  );
};

export { GameWizard };
