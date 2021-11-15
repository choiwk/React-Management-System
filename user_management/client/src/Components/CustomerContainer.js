import React from 'react';
import TableLow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CustomerContainer = ({ id, img, name, birthday, gender, job }) => {
  return (
    <>
      <TableLow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={img} alt="고객 프로필 이미지" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableLow>
    </>
  );
};

export default CustomerContainer;
