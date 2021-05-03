import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child.service';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import { TaskService } from 'src/app/services/task.service';

import { Child } from '../../models/child'
import { TaskGoals } from 'src/app/models/task-goals';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-prerequisite',
  templateUrl: './prerequisite.component.html',
  styleUrls: ['./prerequisite.component.css']
})
export class PrerequisiteComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private childService: ChildService,
    public taskService: TaskService,
    private taskGoalService: TaskGoalsService) { }

    child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
    child = {} as Child
    task_title = ""
    task_id = -1
    taskGoals: TaskGoals[] = []
    tasks: Task[] = []
    dependencies: number[] = []

  ngOnInit(): void {
      this.child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
      this.childService.getChildById(this.child_id).subscribe((child)=>{
        this.child = child
      })
      this.task_title = ""
  }

  set prerequisiteFinder(task_title: string) {
    this.task_title = this.format(task_title)
    this.getTaskId()
    this.getTaskGoals()
    if(this.task_id == -1){
      this.task_title = task_title
      return 
    }
    
    this.taskService.getTaskById(this.task_id).subscribe((task:Task) =>{
      this.dependencies = task.dependencies
    })
    this.tasks = []
    this.dependencies.forEach((dependence) =>{
      this.taskService.getTaskById(dependence).subscribe((task:Task)=>{
        this.tasks.push(task)

      })
    })
    this.task_title = task_title

  }

  get prerequisiteFinder() :string{
    return this.task_title
  }

  getTaskGoals() {
    this.taskGoalService.getTaskGoals().subscribe((taskGoals:TaskGoals[])=>{
      this.taskGoals = taskGoals
    })
  }

  getTaskId() {
    let key = false
    this.taskService.getTasks().subscribe((tasks:Task[])=>{
      //console.log(tasks)
      tasks.forEach((task)=>{
        if(this.format(this.task_title) == this.format(task.title)) {
          this.task_id = task.id
          key = true
        }

      })
      if(!key) this.task_id = -1     
    })   

  }

  format(text:string):string {
    text = text.toLowerCase()
    text = text.replace(' ', '')
    return text
  }
  paramSolver(param :string|null) {
    if(param === null) {
      return 0
    }
    return Number.parseInt(param)
  }
}
