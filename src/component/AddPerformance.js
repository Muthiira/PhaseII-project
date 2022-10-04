import React, {useState} from "react"
export default function AddPerformance (){

	const [formData, setFormData] = useState({
		Student: "",
		Performance: 0,
		Target: 0

})


	return <form>
		<div>
			<label>Student</label>
			<input type="text" name="Student" value={formData.Student}/>
		</div>
		<div>
			<label>Perfomance</label>
			<input type="text" name="Performance" value={formData.Performance}/>
		</div>
		<div>
			<label>Target</label>
			<input type="text" name="Target" value={formData.Target}/>
		</div>
		<div>
			<button> Save</button>
		</div>
	</form>
}