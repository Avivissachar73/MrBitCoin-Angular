import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MoveService } from 'src/app/services/move.service';

@Component({
  selector: 'money-sender',
  templateUrl: './money-sender.component.html',
  styleUrls: ['./money-sender.component.scss']
})
export class MoneySenderComponent implements OnInit {

  constructor(private userService : UserService,
              private moveService : MoveService) { }

  user = null;
  amountOfMoneyToSend = 0;

  @Output() moveAdded = new EventEmitter;
  @Input() contact = null;

  async loadUser() {
    this.user = await this.userService.getLoggedUser();
  }

  async sendMoney(ev) {
    ev.preventDefault();
    var newMove = await this.moveService.sendMoney(this.user, this.contact, this.amountOfMoneyToSend);
    this.amountOfMoneyToSend = 0;
    this.moveAdded.emit(newMove);
  }

  ngOnInit() {
    this.loadUser();
  }

}
