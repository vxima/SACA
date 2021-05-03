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

  paramSolver(param :string|null) {
    if(param === null) {
      return  0
    }
    return Number.parseInt(param)
  }

  child = {} as Child
  ngOnInit(): void {
    this.child_id = this.paramSolver(this.activateRoute.snapshot.paramMap.get('param'))
    this.childService.getChildById(this.child_id).subscribe((child)=>{
      this.child = child
    })
  }

}
