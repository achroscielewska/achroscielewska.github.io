import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { TasksService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

// // base + autohorization
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: "AIzaSyBn6kDGLWfcveLBtEtEQJuHNxmsvIzjIvE",
  authDomain: "auth-689e9.firebaseapp.com",
  databaseURL: "https://auth-689e9.firebaseio.com",
  projectId: "auth-689e9",
  storageBucket: "auth-689e9.appspot.com",
  messagingSenderId: "972347233042"
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    FinishedTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)

  ],
  providers: [
    TasksService,
    HttpService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
