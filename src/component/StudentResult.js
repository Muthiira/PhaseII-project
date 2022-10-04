export default function StudentResult({StudentResult}){
	return <table>
		<thead>
		<tr>
			<th>Student Name</th>
			<th>Perfomance</th>
			<th>Target</th>
			<th>Actions</th>
		</tr>
		</thead>
		<tbody>
			{StudentResult.map(result => <tr>
			<td>{result.Student}</td>
			<td>{result.Performance}</td>
			<td>{result.target}</td>
			<td>
				<button type="button">UPDATE</button>
			</td>
			</tr>)}
		</tbody>
	</table>
}