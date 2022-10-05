import React ,{useEffect, useState} from "react";
import AddPerformance from "./AddPerformance";
import StudentResult from "./StudentResult";
import { collect } from "./crud";


function App() {
	const [addingPerformance, setAddingPerformance] = useState("false")
	const [studentsResult, setStudentsResult] = useState([]);

	// handling side effect
	useEffect(() => {
		collect().then(results =>{
			setStudentsResult(results)
		})
	}, [])
//  callback function to update results
	function updateResults(newResult){
		setStudentsResult([...studentsResult, newResult]);
		setAddingPerformance(false);
	}

	return (

		<main>
			<button type="button" onClick={ () =>setAddingPerformance(!addingPerformance)} >{addingPerformance ? "cancel" : "addPerformance"}</button>
			{addingPerformance ? <AddPerformance onSaved={updateResults} /> : <StudentResult  StudentResult={studentsResult}/>}
			
		</main>
	)
}
export default App;