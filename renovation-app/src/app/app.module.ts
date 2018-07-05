import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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


var config = {
  apiKey: 'AIzaSyAOxdiP41ah20lU3NFX9tEOV6bljsXICE0',
  authDomain: 'renovationapp-b64d5.firebaseapp.com',
  databaseURL: 'https://renovationapp-b64d5.firebaseio.com',
  projectId: 'renovationapp-b64d5',
  storageBucket: '',
  messagingSenderId: '1036208432490'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)

  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
