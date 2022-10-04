import React, {useState} from "react"
import { post } from "./crud";

export default function AddPerformance (){

// deriving input values from state(making it controlled)
	const [formData, setFormData] = useState({
		Student: "",
		Performance: 0,
		Target: 0
});

// including loader
const [saving, setSaving] = useState(false)

// function that handles change
	function handleChange(event){
		setFormData({
			...formData,
			[event.target.name] :  event.target.value
		})
	}

// update function on submission
	function addResult(event){
		event.preventDefault();
		setSaving(true)
		post(formData).then(newResult =>{
			setSaving(false)
			console.log(newResult)
		});
	}

	return <form onSubmit={addResult}>
		<div>
			<label>Student</label>
			<input type="text" name="Student" value={formData.Student} onChange={handleChange}/>
		</div>
		<div>
			<label>Perfomance</label>
			<input type="text" name="Performance" value={formData.Performance}  onChange={handleChange}/>
		</div>
		<div>
			<label>Target</label>
			<input type="text" name="Target" value={formData.Target}  onChange={handleChange}/>
		</div>
		<div>
			<button disabled={saving}>{saving ? 'saving...' : 'save result'}</button>
		</div>
	</form>
}