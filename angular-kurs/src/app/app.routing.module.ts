import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';


const appRoutes: Routes = [
 {
   path: '',
   redirectTo: '/todoTask',
   pathMatch: 'full'
 },
 {
   path: 'todoTask',
   component: ToDoTaskComponent,
   canActivate: [AuthGuardService]
 },
 {
   path: 'finishedTask',
   component: FinishedTaskComponent,
   canActivate: [AuthGuardService]
 },
 {
  path: 'login',
  component: LoginComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
