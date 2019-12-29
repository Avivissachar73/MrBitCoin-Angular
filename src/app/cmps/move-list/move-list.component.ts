import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }

  @Input() moves = [];

  ngOnInit() {
  }

}
