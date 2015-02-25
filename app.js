(function(){
	var app = angular.module('todoApp', []);

	app.controller('TodoCtrl', function(){
		this.list = [
			{text: "Brush Teeth"},
			{text: "Take Medicine"},
			{text: "Check Laundry"}
		];
		this.addTodo = function(todoText){
			this.list.push({text: todoText});
			console.log(this.list);
		}

		this.helloWorld = "Hello Angular!"
	})
})();