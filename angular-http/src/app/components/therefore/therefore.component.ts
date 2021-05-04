import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child.service';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import { TaskService } from 'src/app/services/task.service';

import { Child } from '../../models/child'
import { TaskGoals } from 'src/app/models/task-goals';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-therefore',
  templateUrl: './therefore.component.html',
  styleUrls: ['./therefore.component.css']
})
export class ThereforeComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private childService: ChildService,
    public taskService: TaskService,
    private taskGoalService: TaskGoalsService){}
    
    
    
    child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
    child = {} as Child
    task = {} as Task
    task_title = ""
    task_id = -1
    taskGoals: TaskGoals[] = []
    tasks: Task[] = []
    
    ngOnInit(): void {
      this.child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
      this.childService.getChildById(this.child_id).subscribe((child)=>{
        this.child = child
      })
      this.task_title = ""
    }
    
    set thereforeFinder(task_title: string) {
      
      this.taskGoalService.getTaskGoals().subscribe((taskGoals:TaskGoals[])=>{
        this.task_title = this.format(task_title)
        this.taskGoals = taskGoals
        this.getTaskGoals()
        this.getTaskId()
        //console.log(this.task_id)
        this.taskGoals = this.taskGoals.filter((taskGoal)=>{
          return this.child_id===taskGoal.child_id
        })

        this.tasks = []
        this.taskGoals.forEach((taskGoal)=>{
          this.taskService.getTaskById(taskGoal.task_id).subscribe((task:Task)=>{
            let arr = task.dependencies.filter((id)=>{
              return id===this.task_id
            })
            if(arr.length !== 0) {
              this.tasks.push(task)
            }
            
          })
        })
        this.task_title = task_title
      })
      
    }

    get thereforeFinder() :string{
      return this.task_title
    }
    
    getTaskGoals() {
      
    }

    getTaskId() {
      let key = false
      this.taskService.getTasks().subscribe((tasks:Task[])=>{
        console.log(tasks)
        tasks.forEach((task)=>{
          if(this.format(this.task_title) == this.format(task.title)) {
            this.task_id = task.id
            key = true
          }
        })
      })
      if(!key) this.task_id = -1     
      
    }

    format(text:string):string {
      let newText = ""
      text = text.toLowerCase()
      for(let i = 0; i < text.length; i++) {
        if((text[i]>='a' && text[i]<='z') || (text[i]>='A' && text[i]<='Z')) {
          newText = newText + text[i]
        }
      }
      return newText
    }
    paramSolver(param :string|null) {
      if(param === null) {
        return 0
      }
      return Number.parseInt(param)
    }

}
