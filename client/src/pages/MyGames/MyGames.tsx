import React from 'react';
import MaterialTable, { Column } from '@material-table/core';
import { PageWrapper } from '../Layout';
import { useData } from '../../store';

interface IMyGames {}

const MyGames = (props: IMyGames) => {
  const {} = props;
  const { dataState, dataActions } = useData();

  const onRowUpdate = async (newData: IGame, oldData?: IGame) => {};
  const onRowDelete = async (oldData: IGame) => {};
  const onRowAdd = async (newData: IGame) => {};

  return (
    <PageWrapper>
      <MaterialTable
        title="My Games"
        columns={columns}
        data={dataState.games}
        editable={{
          onRowUpdate,
          onRowDelete,
          onRowAdd,
        }}
      />
    </PageWrapper>
  );
};

export { MyGames };

const columns: Array<Column<IGame>> = [
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Duration',
    field: 'duration',
  },
  {
    title: 'Colors',
    field: 'colors',
  },
  {
    title: 'Code',
    field: 'code',
  },
  {
    title: 'StartTime',
    field: 'startTime',
  },
  {
    title: 'Missions',
    field: 'missions',
  },
  {
    title: 'Teacher',
    field: 'teacher',
  },
  {
    title: 'Class',
    field: 'class',
  },
  {
    title: 'Students',
    field: 'students',
  },
  {
    title: 'Created At',
    field: 'createdAt',
  },
  {
    title: 'Updated At',
    field: 'updatedAt',
  },
];
