import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  @Output() removeContact = new EventEmitter;

  @Input() contacts = [];

  remove(_id) {
    this.removeContact.emit(_id);
  }

  ngOnInit() {
  }

}
