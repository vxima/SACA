import { Component, OnInit } from '@angular/core';
import { TaskGoals} from '../../models/task-goals' 
import { TaskGoalsService } from '../../services/task-goals.service' 

@Component({
  selector: 'app-goals-prerequisite',
  templateUrl: './goals-prerequisite.component.html',
  styleUrls: ['./goals-prerequisite.component.css']
})
export class GoalsPrerequisiteComponent implements OnInit {

  constructor(private taskGoalsService: TaskGoalsService) {}
  task = {} as TaskGoals
  ngOnInit(): void {
    this.task.id = "1,1";
    this.task.child_id = 1;
    this.task.task_id = 1;
    this.task.goal = "MA";
    this.task.achieved = true;
  }
  getTaskGoals(){}
  getTaskGoal(){}
  saveTaskGoals(){
    this.taskGoalsService.saveTaskGoal(this.task).subscribe(()=>{
      this.task.id = "";
    })
  }
  deleteTaskGoals(){
    this.taskGoalsService.deleteTaskGoals(this.task).subscribe(()=>{
      this.task.id = "";
    })
  }
}
