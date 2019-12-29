import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor() { }

  @Output() setFilter = new EventEmitter();

  filterBy = {searchStr: ''};

  submit(event) {
    event.preventDefault()
  }

  setFilterby() {
    this.setFilter.emit(JSON.parse(JSON.stringify(this.filterBy)));
  }

  ngOnInit() {
  }

}
