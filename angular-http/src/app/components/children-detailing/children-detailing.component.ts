import { Component, OnInit } from '@angular/core';
import { Child } from './../../models/child';
import { ChildService } from './../../services/child.service';

@Component({
  selector: 'app-children-detailing',
  templateUrl: './children-detailing.component.html',
  styleUrls: ['./children-detailing.component.css']
})
export class ChildrenDetailingComponent implements OnInit {

  child = {} as Child;
  children: Child[] = [];

  constructor(private childService: ChildService) {}
  
  ngOnInit() {
    this.getChildren();
  }

  getChildren() {
    this.childService.getChildren().subscribe((children: Child[]) => {
      this.children = children;
    });
  }

  
}
