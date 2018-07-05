import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AuthGuardService } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/rooms",
    pathMatch: "full"
  },
  {
    path: "rooms",
    component: RoomsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
