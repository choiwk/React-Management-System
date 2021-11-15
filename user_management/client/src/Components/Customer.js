import React, { useState, useEffect } from 'react';
import CustomerContainer from './CustomerContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';

const Customer = (props) => {
  const [customersData, setCustomersData] = useState([]);
  const { classes } = props;

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    callApi().then((data) => setCustomersData(data));
  }, []);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customersData.map((customerDetail, index) => (
            <CustomerContainer
              key={index}
              id={customerDetail.id}
              img={customerDetail.img}
              name={customerDetail.name}
              birthday={customerDetail.birthday}
              gender={customerDetail.gender}
              job={customerDetail.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
};

export default withStyles(styles)(Customer);
