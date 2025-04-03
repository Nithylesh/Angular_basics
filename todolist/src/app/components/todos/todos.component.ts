import { Component } from '@angular/core';
 import {Todo} from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos !: Todo[];
  inputTodo : string = "";

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content : "First todo",
        completed : false
      },
      {
        content : "second todo",
        completed : true
      }
    ]
  }

  toggleDone(id: number) {
    this.todos = this.todos.map((v, i) => {
      if (i === id) {
        v.completed = !v.completed;  // Use '=' for assignment
      }
      return v;  // Ensure that the modified or unmodified 'v' is returned
    });
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
    this.inputTodo ="";
  }
  
}
