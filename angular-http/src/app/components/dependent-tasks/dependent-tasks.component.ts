import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dependent-tasks',
  templateUrl: './dependent-tasks.component.html',
  styleUrls: ['./dependent-tasks.component.css']
})
export class DependentTasksComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  val = this.activeRoute.snapshot.paramMap.get('param')
  ngOnInit(): void {
  }

}
