import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CompleteNotification } from 'rxjs';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title= 'Todo';
  todoList:Todo[]=[
    {
      task: "Laundry",
      complete: true
    },
    {
      task: "Dishes",
      complete: true
    },
    {
      task: "Clean Office",
      complete: false
    },
    {
      task: "Make Strawberry Pots",
      complete: false
    },
    {
      task: "Bathrooms",
      complete: true
    },
    {
      task: "Review Interview Prep",
      complete: false
    },
    {
      task: "Complete Lab",
      complete: false
    },
    {
      task: "Study For Mock Assessment",
      complete: false
    },
    {
      task: "Feed the Cats",
      complete: true
    },
    {
      task: "Give Bella Meds",
      complete: true
    },
    {
      task: "Clean Studio",
      complete: false
    },
  ]

  completeTask(){
   this.todoList.forEach((t:Todo)=> {
    return t.complete=true; 
   }
  )};

  newTask:Todo={
    task:"",
    complete: false
  }

  addTask(){
   let result:Todo={
    task:this.newTask.task,
    complete:this.newTask.complete
   };
   this.todoList.push(result);
  }
}

interface todo{
  task:string;
  complete: boolean;
}