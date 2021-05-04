import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { TaskGoalsService } from 'src/app/services/task-goals.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Task } from '../../models/task'
import { TaskService } from '../../services/task.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})

export class RegisterTaskComponent implements OnInit, AfterViewInit {

  constructor(private taskService : TaskService) {}

  aux = 0
  task = {} as Task
  tasks: Task[] = []
  displayedColumns: string[] = ['id', 'title', 'description', 'difficulty'];
  dataSource = new MatTableDataSource(this.tasks);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.task.dependencies = []
    this.getTasks()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[])=>{
      this.tasks = tasks
      this.dataSource = new MatTableDataSource(this.tasks)
      this.dataSource.sort = this.sort;
      this.table.renderRows();
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