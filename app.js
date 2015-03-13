(function(){
	var app = angular.module('todoApp', []);

	app.controller('TodoCtrl', function(){
		this.list = [
			{text: "Brush Teeth", order: 0},
			{text: "Take Medicine", order: 1},
			{text: "Check Laundry", order: 2}
		];
		this.newTodo = function(text, order){
			this.text = text;
			this.order = order || -1;
			this.isComplete = false;
		},
		this.addTodo = function(text, order) {
			var tmpTodo = new this.newTodo(text, order);
			console.log("tmp", tmpTodo)
			this.list.push(tmpTodo);
			$('#todoInput').val('');
		},

		this.removeTodo = function(order){
			this.list.splice(order, 1);
			console.log(this.list);

			for (var i=0; i<this.list.length; i++)
			{
				this.list[i].order = i;
			}
		}

		this.helloWorld = "Hello Angular!"
	})
})();