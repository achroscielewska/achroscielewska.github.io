import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { EditRoomsComponent } from "./components/edit-rooms/edit-rooms.component";
import { RoomDetailsComponent } from "./components/rooms/room-details/room-details.component";

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
    path: "rooms/:id/details",
    component: RoomDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "editRooms",
    component: EditRoomsComponent,
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
