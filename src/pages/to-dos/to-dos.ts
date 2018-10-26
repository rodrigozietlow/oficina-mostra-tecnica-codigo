import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-to-dos',
	templateUrl: 'to-dos.html'
})
export class ToDosPage {

	todos: string[] = [];

	constructor(public navCtrl: NavController) {
		this.todos = ["Lavar a louça", "Passar pano"];
	}

	addTodo(todo: string) {
		this.todos.push(todo);
	}

	removeTodo(index: number) {
		this.todos.splice(index, 1);
	}

}
