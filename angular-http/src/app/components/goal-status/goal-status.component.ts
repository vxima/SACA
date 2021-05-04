import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child.service';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import { TaskService } from '../../services/task.service';

import { Child } from '../../models/child'
import { TaskGoals } from 'src/app/models/task-goals';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-goal-status',
  templateUrl: './goal-status.component.html',
  styleUrls: ['./goal-status.component.css']
})
export class GoalStatusComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private childService: ChildService,
    public taskService: TaskService,
    private taskGoalService: TaskGoalsService
  ) { }

  ngOnInit(): void {
  }

  child_id: number = 0
  task_id: number = -1
  taskTitle: string = ""
  info: string = ""
  taskGoal = {} as TaskGoals
  totalTasks: number = 0
  achievedTasks: number = 0
  task = {} as Task
  dependencies: number[] = []
  percent: number = 0
  wait: number = 0

  set def_id(id: number) {
    this.child_id = id
  }

  get def_id(): number {
    return this.child_id
  }

  set def_goalName(taskTitle: string) {
    this.taskTitle = taskTitle
  }

  get def_goalName(): string {
    return this.taskTitle
  }

  search() {
    this.getTaskId();
  }

  makeInfo() {
    console.log(this.percent)
    this.percent = this.achievedTasks / this.totalTasks
    this.percent = this.percent * 100
    this.info = "A criança cumpriu " + this.percent.toString() + "% dos pré-requisitos da atividade " + this.taskTitle
  }

  getInfo() {
    return this.info
  }

  getDependenciesTasks(task_id: number) {
    this.taskService.getTaskById(task_id).subscribe((task: Task) => {
      this.dependencies = task.dependencies
    })
  }

  getTaskId() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      let found = false
      let found2 = false
      tasks.forEach((task) => {
        if (this.format(this.taskTitle) == this.format(task.title)) {
          found = true
          this.taskGoalService.getTaskGoals().subscribe((taskGoals: TaskGoals[]) => {
            taskGoals.forEach((taskGoal: TaskGoals) => {
              if (taskGoal.child_id == this.child_id && taskGoal.task_id == task.id) {
                found2 = true
                if (taskGoal.achieved) {
                  this.achievedTasks = 1
                  this.totalTasks = 1
                  this.makeInfo()
                }
                else {
                  this.count(task)
                }
              }
            })
          })
        }
      })
      if (!found) {
        this.info = "A atividade não existe."
      }
      else if (!found2) {
        this.achievedTasks = 0
        this.totalTasks = 1
        this.makeInfo()
      }
    })
  }

  count(task: Task) {
    this.wait = task.dependencies_number
    this.totalTasks = task.dependencies_number
    console.log(this.totalTasks)
    console.log(task.id)
    task.dependencies.forEach((task_id) => {
      this.countTaskGoal(task_id)
    })
  }

  countTaskGoal(task_id: number) {
    this.taskGoalService.getTaskGoals().subscribe((taskGoals: TaskGoals[]) => {
      this.wait = this.wait - 1
      taskGoals.forEach((task: TaskGoals) => {
        if (task.child_id == this.child_id && task.task_id == task_id) {
          if (task.achieved) {
            this.totalTasks = this.totalTasks + 1
            this.achievedTasks = this.achievedTasks + 1
          }
        }
      })
      if (this.wait == 0) {
        this.makeInfo()
      }
    })
  }

  format(text: string): string {
    text = text.toLowerCase()
    text = text.replace(' ', '')
    return text
  }
}
