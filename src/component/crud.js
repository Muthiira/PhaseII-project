const api =  "http://localhost:3001/Performance"

// fetching data from api
export function collect(){
	return fetch(api)
	.then((resp) => resp.json())
}

// posting data to backend
export function post(result){
	return fetch(`${api}/${result.id}`,{
		method : "POST",
		body: JSON.stringify(result),
		headers:{
			"Content-Type": "application/json"
		}
	}).then((resp) => resp.json()) 
}

// updating data
export function patch(result){
	return fetch(`${api}/${result.id}` ,{
		method : "PATCH",
		body: JSON.stringify(result),
		headers:{
			"Content-Type": "application/json"
		}
	}).then((resp) => resp.json()) 
}

export function Delete(id){
	return fetch(`${api}/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}