import { Component, OnInit } from '@angular/core';
import { ChildService } from './services/child.service';
import { Child } from './models/child';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http';
  child = {} as Child;
  children: Child[] = [];

  constructor(private carService: ChildService) {}
  
  ngOnInit() {
    this.getChildren();
  }

  // defines if a child will be updated or saved
  saveChild(form: NgForm) {
    
    if (this.children.find(child=>child.id === this.child.id) !== undefined) {
        this.carService.updateChild(this.child).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveChild(this.child).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // calls the service to obtain all chindren
  getChildren() {
    this.carService.getChildren().subscribe((children: Child[]) => {
      this.children = children;
    });
  }

  // delete a child
  deleteChild(child: Child) {
    this.carService.deleteChild(child).subscribe(() => {
      this.getChildren();
    });
  }

  // Makes the current child a copy of the one to be edited
  editChild(child: Child) {
    this.child = { ...child };
  }

  // cleans de form
  cleanForm(form: NgForm) {
    this.getChildren();
    form.resetForm();
    this.child = {} as Child;
  }

}