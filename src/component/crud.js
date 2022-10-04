const api =  "http://localhost:3001/Performance"

export function collect(){
	return fetch(api)
	.then((resp) => resp.json())
}

export function post(){

}

export function patch(){

}