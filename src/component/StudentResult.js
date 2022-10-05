import { useState } from "react"

export default function StudentResult({StudentResult}){
	
	const[update, setUpdate] = useState();

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
				<button type="button">UPDATE</button>
			</td>
			</tr>)}
		</tbody>
	</table>
}