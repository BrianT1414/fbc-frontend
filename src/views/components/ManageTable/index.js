import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../Loading';

const ManageTable = (props) => {
	return (
		<>
			<Loading show={props.loading} />
			<div style={{ textAlign: 'right' }}>
				<Button 
					onClick={props.add} 
					style={{ marginRight: 15 }}
					variant="outlined"
				>
					<AddIcon />
					New
				</Button>
			</div>
			<Table size="small">
				<TableBody>
					{props.data.map((row) => (
						<TableRow key={row.id}>
							{row.values.map((value) => (
								<TableCell key={value}>{value}</TableCell>
							))}
							<TableCell align="right">
								<IconButton aria-label="edit" onClick={() => props.edit(row.id)}>
									<EditIcon />
								</IconButton>
								<IconButton aria-label="delete" onClick={() => props.delete(row.id)}>
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}

export default ManageTable;
