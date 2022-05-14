import React, { forwardRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Chip from '@mui/material/Chip';
import axios from '../../http-common';
import { Button } from '@mui/material';
import moment from 'moment';
import {
  Search,
  XSquare,
  Delete,
  Download,
  ChevronsDown,
  PlusCircle,
  Trash2,
  Edit,
} from 'react-feather';
import UserDetailModal from '../modal/UserDetailModal';

const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const currentTimeString = date + ' ' + time;

const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: '2rem',
    position: 'relative',
  },
}));

const tableIcons = {
  Add: forwardRef((props, ref) => <PlusCircle {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <Trash2 {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <Download {...props} ref={ref} />),
  ResetSearch: () => <Delete />,
  Search: () => <Search />,
  SortArrow: forwardRef((props, ref) => <ChevronsDown {...props} ref={ref} />),
};

const options = {
  selection: true,
  showSelectAllCheckbox: false,
  showTextRowsSelected: false,
  selectionProps: (rowData) => ({
    color: 'primary',
    disabled: rowData.status === 3,
  }),
  rowStyle: (rowData) => ({
    color: rowData.tableData.checked ? '#fe5000' : '',
    backgroundColor: rowData.tableData.checked ? '#eee' : '',
  }),
  sorting: false,
  thirdSortClick: false,
  exportButton: false,
  showTitle: true,
  paginationType: 'stepped',
  showFirstLastPageButtons: false,
  pageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
  emptyRowsWhenPaging: false,
  toolbarButtonAlignment: 'left',
  searchFieldAlignment: 'right',
  searchFieldVariant: 'outlined',
  searchFieldStyle: { height: 40, paddingRight: 0 },
  headerStyle: {
    backgroundColor: '#808080',
    color: '#FFF',
  },
};
const STATUS = {
  pending_to_approve: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="PENDING"
      color="primary"
    />
  ),
  approved: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="APPROVED"
      color="success"
    />
  ),
};
const CheckInListing = (props) => {
  // const { data } = props;
  const params = useParams();
  const [checkinListing, setCheckinListing] = useState([]);
  useEffect(async () => {
    const response = await axios.get('users/check-in');
    if (response) setCheckinListing(response.data);
  });
  const classes = useStyles();
  return (
    <div className={classes.listContainer}>
      <MaterialTable
        data={checkinListing}
        columns={[
          {
            title: 'checkin ID',
            field: 'id',
          },
          {
            title: 'Student ID',
            field: 'sid',
          },

          {
            title: 'Temperature',
            field: 'temperature',
          },
          {
            title: 'Checkin Time',
            field: 'checkin_time',
            render: (rowData) => moment(rowData.checkin_time).format('HH:mm:ss DD-MM-YYYY'),
          },
        ]}
        actions={[
          {
            icon: () => <PlusCircle />,
            tooltip: 'Add Row',
            isFreeAction: true,
            onClick: (event) => alert('You want to add a new row'),
          },
          {
            icon: () => <PlusCircle />,
            tooltip: 'Add Row',
            disabled: true,
          },
          {
            icon: () => <Trash2 />,
            tooltip: 'Delete Row',
            isFreeAction: true,
            disabled: true,
          },
          {
            icon: () => <Trash2 />,
            tooltip: 'Delete Row',
            onClick: (evt, data) => alert('You want to delete a row'),
          },
        ]}
        icons={tableIcons}
        options={options}
        title="Checked in Users"
      />
    </div>
  );
};

export default CheckInListing;
