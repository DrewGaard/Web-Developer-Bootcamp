var command = prompt("What would you like to do?");
var todos = [];

while(command != "quit"){
	
	if(command == "new"){
		addTodo();
	} else if(command == "list") {
		listTodos();
	} else if(command == "delete"){
		deleteTodo();
	}
	
	var command = prompt("What would you like to do?");
}

function listTodos() {
	console.log("**********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("**********");
}

function addTodo() {
	var newTodo = prompt("Enter a new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	var todoIndex = prompt("Enter the index of the todo to delete");
	todos.splice(todoIndex, 1);
	console.log("Deleted Todo");
}