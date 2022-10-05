import React, { useState } from "react"
import { post, patch } from "./crud";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function AddPerformance({ onSaved, defaultData }) {

	// deriving input values from state(making it controlled)
	const [formData, setFormData] = useState({
		Student: defaultData ? defaultData.Student : "",
		Performance: defaultData ? defaultData.Performance : "",
		Target: defaultData ? defaultData.Target : ""
	});

	// including loader
	const [saving, setSaving] = useState(false)

	// function that handles change
	function handleChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	// update function on submission
	function addResult(event) {
		event.preventDefault();
		setSaving(true)
		// if defaultData is defined update,if not defined create
		if (defaultData) {
			patch({ ...formData, id: defaultData.id }).then((updatedPerformance) => {
				setSaving(false);
				onSaved(updatedPerformance);
				console.log(updatedPerformance);
			})
		} else {
			post(formData).then(newResult => {
				setSaving(false);
				onSaved(newResult);
				console.log(newResult);
			});
		}
	}
	return <form  onSubmit={addResult}>
		<div>
			<TextField id="filled-basic" label="Student" variant="filled" type="text" name="Student" value={formData.Student} onChange={handleChange} />
			</div>
			<div>
			<TextField id="filled-basic" label="Performance" variant="filled" type="text" name="Performance" value={formData.Performance} onChange={handleChange} />
			</div>
			<div>
			<TextField id="filled-basic" label="Target" variant="filled" type="text" name="Target" value={formData.Target}  onChange={handleChange}/>
			</div>
			<div>
			<Button variant="outlined" disabled={saving}>{saving ? 'saving...' : 'save result'}</Button>

		</div>
		</form>
	



	// return <form onSubmit={addResult}>
	// 	<div>
	// 		<label>Student</label>
	// 		<input type="text" name="Student" value={formData.Student}  onChange={handleChange}/>

	// 	</div>
	// 	<div>
	// 		<label>Perfomance</label>
	// 		<input type="text" name="Performance" value={formData.Performance}  onChange={handleChange}/>
	// 	</div>
	// 	<div>
	// 		<label>Target</label>
	// 		<input type="text" name="Target" value={formData.Target}  onChange={handleChange}/>
	// 	</div>
	// 	<div>
	// 		<button disabled={saving}>{saving ? 'saving...' : 'save result'}</button>
	// 	</div>
	// </form>
}