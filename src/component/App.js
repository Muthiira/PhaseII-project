import React, { useEffect, useState } from "react";
import AddPerformance from "./AddPerformance";
import StudentResult from "./StudentResult";
import { collect, Delete } from "./crud";
import Button from '@mui/material/Button';



function App() {
	const [addingPerformance, setAddingPerformance] = useState(false);
	const [studentsResult, setStudentsResult] = useState([]);
	const [newUpdate, setNewUpdate] = useState();

	// handling side effect
	useEffect(() => {
		collect().then(results => {
			setStudentsResult(results)
		})
	}, [])
	//  callback function to update results
	function updateResults(newResult) {
		// if newUpdate is defined update result if not defined add into the array
		if (newUpdate) {
			const index = studentsResult.findIndex(r => r.id === newResult.id);
			console.log(index)
			// updating form using index
			let latestUpdate = [...studentsResult];
			latestUpdate[index] = newResult;
			setStudentsResult(latestUpdate);

		} else {
			setStudentsResult([...studentsResult, newResult]);
		}
		setAddingPerformance(false);
	}
	// function that handles patch(edit)
	function onUpdate(result) {
		setNewUpdate(result)
		setAddingPerformance(true)
	}
	// function that handles delete
	function onDelete(id) {
		Delete(id).then(resp => {
			const index = studentsResult.findIndex(r => r.id === id);
			console.log(index)
			let latestUpdate = [...studentsResult];
			latestUpdate.splice(index, 1);
			setStudentsResult(latestUpdate);
		})
	}


	return (

		<main>
			{addingPerformance ?
				<AddPerformance onSaved={updateResults} defaultData={newUpdate} /> :
				<StudentResult StudentResult={studentsResult} update={onUpdate} Delete={onDelete} />}
			<Button  variant="outlined" type="button" onClick={() => setAddingPerformance(!addingPerformance)} >{addingPerformance ? "cancel" : "addPerformance"}</Button>

		</main>
	)
}
export default App;