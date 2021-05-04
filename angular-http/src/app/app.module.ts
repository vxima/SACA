import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterChildComponent } from './components/register-child/register-child.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DependentTasksComponent } from './components/dependent-tasks/dependent-tasks.component';
import { RegisterTaskComponent } from './components/register-task/register-task.component';
import { ChildrenDetailingComponent } from './components/children-detailing/children-detailing.component';
import { InformationsComponent } from './components/informations/informations.component';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterChildComponent,
    HomePageComponent,
    DependentTasksComponent,
    RegisterTaskComponent,
    ChildrenDetailingComponent,
    InformationsComponent
  ],
  imports: [
    MatSortModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:'home-page', pathMatch: 'full'
      },
      {
        path: 'home-page', component:HomePageComponent
      },
      {
        path: 'register-child', component:RegisterChildComponent
      },
      {
        path: 'register-task', component:RegisterTaskComponent
      },
      {
        path: 'children-detailing', component:ChildrenDetailingComponent
      },
      {
        path: 'informations/:param', component:InformationsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
