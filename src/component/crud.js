const api =  "http://localhost:3001/Performance"

// fetching data from api
export function collect(){
	return fetch(api)
	.then((resp) => resp.json())
}

// posting data to backend
export function post(result){
	return fetch(api ,{
		method : "POST",
		body: JSON.stringify(result),
		headers:{
			"Content-Type": "application/json"
		}
	}).then((resp) => resp.json()) 
}

// updating data
export function patch(){

}