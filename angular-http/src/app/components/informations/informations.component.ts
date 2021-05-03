import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from 'src/app/services/child.service';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import { TaskService } from 'src/app/services/task.service';

import { Child } from '../../models/child'


@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private childService: ChildService,
    taskService: TaskService,
    taskGoalService: TaskGoalsService){}

  child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
  child = {} as Child
  dependent_goals_key = false;
  
  ngOnInit(): void {
    this.child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
    this.childService.getChildById(this.child_id).subscribe((child)=>{
      this.child = child
    })
  }

  paramSolver(param :string|null) {
    if(param === null) {
      return  0
    }
    return Number.parseInt(param)
  }

  dependent_goals_func(){
    this.dependent_goals_key = !this.dependent_goals_key
  }

}
