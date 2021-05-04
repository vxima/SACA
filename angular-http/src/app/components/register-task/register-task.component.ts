import { Component, OnInit } from '@angular/core';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import { Task } from '../../models/task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  aux = 0
  task = {} as Task
  tasks: Task[] = []

  ngOnInit(): void {
    this.task.dependencies = []
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[])=>{
      this.tasks = tasks
    })
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(()=>{
      this.getTasks()
    })
    
  }
  addDependence() {
    this.task.dependencies.push(this.aux)
  }
  saveTask() {
    this.taskService.saveTask(this.task).subscribe(()=>{
      this.cleanForm();
    })
  }
  
  cleanForm(/*form: NgForm*/) {
    //form.resetForm();
    this.task = {} as Task;
    this.task.dependencies = []
  }

}
