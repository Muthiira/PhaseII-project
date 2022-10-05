import React from "react"
import Button from '@mui/material/Button';

export default function StudentResult({StudentResult, update, Delete}){
	
	return <table>
		<thead>
		<tr>
			<th>Student</th>
			<th>Perfomance</th>
			<th>Target</th>
			<th>Actions</th>
		</tr>
		</thead>
		<tbody>
			{StudentResult.map(result => <tr key={result.id}> 
			<td>{result.Student}</td>
			<td>{result.Performance}</td>
			<td>{result.Target}</td>
			<td>
				{/* passing callback function for update */}
				<Button  variant="text" onClick={() => update(result)} type="button">UPDATE</Button>
				<Button variant="outlined" onClick={() => Delete(result.id)} type="button">DELETE</Button>
			</td>
			</tr>)}
		</tbody>
	</table>
}