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

  // defini se um carro será criado ou atualizado
  saveChild(form: NgForm) {
    
    if (this.children.find(child=>child.id === this.child.id) !== undefined) {
        console.log('CHILDREN UPDATED')
        this.carService.updateChild(this.child).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      console.log('CHILDREN SAVED')
      this.carService.saveChild(this.child).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  getChildren() {
    this.carService.getChildren().subscribe((children: Child[]) => {
      this.children = children;
    });
  }

  // deleta um carro
  deleteChild(child: Child) {
    this.carService.deleteChild(child).subscribe(() => {
      this.getChildren();
    });
  }

  // copia o carro para ser editado.
  editChild(child: Child) {
    this.child = { ...child };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getChildren();
    form.resetForm();
    this.child = {} as Child;
  }

}