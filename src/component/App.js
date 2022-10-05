import React, { useEffect, useState } from "react";
import AddPerformance from "./AddPerformance";
import StudentResult from "./StudentResult";
import { collect } from "./crud";


function App() {
	const [addingPerformance, setAddingPerformance] = useState([]);
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
		setStudentsResult([...studentsResult, newResult]);
		setAddingPerformance(false);
	}
// function that handles patch(edit)
	function onUpdate(result) {
		setNewUpdate(result)
		setAddingPerformance(true)
	}



	return (

		<main>
			<button type="button" onClick={() => setAddingPerformance(!addingPerformance)} >{addingPerformance ? "cancel" : "addPerformance"}</button>
			{addingPerformance ?
				<AddPerformance onSaved={updateResults} defaultData={newUpdate} /> :
				<StudentResult StudentResult={studentsResult} update={onUpdate} />}

		</main>
	)
}
export default App;