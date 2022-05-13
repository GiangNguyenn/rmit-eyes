import React, { forwardRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Chip from '@mui/material/Chip';
import axios from '../../http-common';
import { Button } from '@mui/material';
import { Search, Delete, Download, ChevronsDown, PlusCircle, Trash2, Edit } from 'react-feather';
import UserDetailModal from '../modal/UserDetailModal';
import AvatarCell from './AvatarCell';
import RejectFormModal from '../modal/RejectFormModal';

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
    position: 'relative',
    justifyContent: 'space-around',
  },
};
const STATUS = {
  pending_to_approve: (
    <Chip style={{ position: 'relative' }} size="medium" label="PENDING" color="warning" />
  ),
  approved: (
    <Chip style={{ position: 'relative' }} size="medium" label="APPROVED" color="success" />
  ),
};
const UserGridComponent = (props) => {
  // const { data } = props;
  const params = useParams();
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const response = await axios.get('users', {
      params: {
        status: props.approve ? 'pending_to_approve' : '-pending_to_approve',
      },
    });
    response && setUsers(response.data);
  }, [params]);

  const classes = useStyles();
  const handleApprove = (sid) => {
    setUsers(users.filter((user) => user.sid !== sid));
    axios
      .put('/users/user/approve', { sid: sid, status: 'approved' })
      .then((res) => console.log(res));
  };
  return (
    <div className={classes.listContainer}>
      <MaterialTable
        data={users}
        columns={[
          {
            title: 'SID',
            field: 'sid',
          },
          {
            title: 'Avatar',
            field: 'image',
            render: (rowData) => rowData.image && <AvatarCell value={rowData.image} />,
          },
          {
            title: 'Name',
            field: 'student_name',
            defaultSort: 'desc',
          },

          {
            title: 'Status',
            field: 'status',
            render: (rowData) => <>{STATUS[rowData.status]}</>,
          },
          {
            title: 'Details',
            field: '',
            render: (rowData) => <UserDetailModal user={rowData} />,
          },
          props.approve
            ? {
                title: 'Actions',
                field: '',
                render: (rowData) => (
                  <div style={{ display: 'flex', margin: '1rem' }}>
                    <Button
                      style={{ margin: '10px' }}
                      variant="contained"
                      color="success"
                      onClick={() => handleApprove(rowData.sid)}
                    >
                      Approve
                    </Button>
                    <RejectFormModal
                      user={{ to_name: rowData.name, mail: rowData.email, sid: rowData.sid }}
                    />
                  </div>
                ),
              }
            : {},
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
        title="Validated Users"
      />
    </div>
  );
};

export default UserGridComponent;
