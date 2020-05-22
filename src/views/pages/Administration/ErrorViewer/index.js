import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ErrorViewer = (props) => {
  React.useEffect(() => {
    props.getErrors();
  }, []);

  return (
		<Table size="small">
      <TableBody>
        {props.errors.map((row) => (
          <TableRow key={row.date}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.error}</TableCell>
            <TableCell>{JSON.stringify(row.stack_trace)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ErrorViewer;