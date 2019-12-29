import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MoveService } from 'src/app/services/move.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService : UserService,
              private moveService : MoveService,
              private router: Router) { }

  user = null;
  moves = [];

  async ngOnInit() {
    this.user = await this.userService.getLoggedUser();
    if (!this.user) this.router.navigate(['/signup']);
    this.moves = await this.moveService.query({contactId: this.user._id});
  }

}
