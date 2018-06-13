import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { TasksService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    FinishedTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
