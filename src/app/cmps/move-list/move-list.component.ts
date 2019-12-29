import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoveService } from 'src/app/services/move.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor(private moveService : MoveService) { }

  @Input() moves = [];
  @Output() moveRemoved = new EventEmitter

  async undoMove(move) {
    await this.moveService.unSendMoney(move);
    this.moveRemoved.emit(move._id);
  }

  ngOnInit() {
  }

}
