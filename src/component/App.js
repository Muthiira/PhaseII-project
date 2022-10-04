import React ,{useEffect, useState} from "react";
import AddPerformance from "./AddPerformance";
import StudentResult from "./StudentResult";
import { collect } from "./crud";


function App() {
	const [addingPerformance, setAddingPerformance] = useState("false")
	const [studentsResult, setStudentsResult] = useState([]);

	useEffect(() => {
		collect().then(results =>{
			console.log(results)
		})
	}, [])
	return (

		<main>
			<button type="button" onClick={ () =>setAddingPerformance(!addingPerformance)} >{addingPerformance ? "cancel" : "addPerformance"}</button>
			{addingPerformance ? <AddPerformance /> : <StudentResult  StudentResult={studentsResult}/>}
			
		</main>
	)
}
export default App;