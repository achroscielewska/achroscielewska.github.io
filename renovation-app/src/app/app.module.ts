import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './auth/login/login.component';

// // base + autohorization
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HttpService } from './services/http.service';

import { RoomsService } from './services/room.service';
import { EditRoomsComponent } from './components/edit-rooms/edit-rooms.component';
import { RoomDetailsComponent } from './components/rooms/room-details/room-details.component';
import { AddTaskComponent } from './components/rooms/room-details/add-task/add-task.component';
import { EditTaskComponent } from './components/rooms/room-details/edit-task/edit-task.component';
import { ContractorsComponent } from './components/contractors/contractors.component';


const config = {
  apiKey: 'AIzaSyAOxdiP41ah20lU3NFX9tEOV6bljsXICE0',
  authDomain: 'renovationapp-b64d5.firebaseapp.com',
  databaseURL: 'https://renovationapp-b64d5.firebaseio.com',
  projectId: 'renovationapp-b64d5',
  storageBucket: 'renovationapp-b64d5.appspot.com',
  messagingSenderId: '1036208432490'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomsComponent,
    EditRoomsComponent,
    RoomDetailsComponent,
    AddTaskComponent,
    EditTaskComponent,
    ContractorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)

  ],
  providers: [
    AuthService,
    AuthGuardService,
    HttpService,
    RoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
