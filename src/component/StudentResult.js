import { useState } from "react"

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
				<button  onClick={() => update(result)} type="button">UPDATE</button>
				<button  onClick={() => Delete(result.id)} type="button">DELETE</button>
			</td>
			</tr>)}
		</tbody>
	</table>
}