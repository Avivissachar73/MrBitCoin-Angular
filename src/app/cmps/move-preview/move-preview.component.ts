import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {

  constructor() { }

  @Input() move = null;

  ngOnInit() {
  }

}
