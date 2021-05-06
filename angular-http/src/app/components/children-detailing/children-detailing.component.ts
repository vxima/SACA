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

  filteredChildren: Child[] = [];

  _filterBy!: string;

  constructor(private childService: ChildService) {}
  
  ngOnInit() {
    this.getChildren();
  }

  getChildren() {
    this.childService.getChildren().subscribe((children: Child[]) => {
      this.children = children;
      this.filteredChildren = this.children;
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredChildren = this.children.filter((_children: Child) => _children.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
  
}