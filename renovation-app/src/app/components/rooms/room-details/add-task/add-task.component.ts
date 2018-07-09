import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  id: number;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];


    });
  }

}
