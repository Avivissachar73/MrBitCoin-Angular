import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactService : ContactService = null;

  constructor(contactService : ContactService) {
    this.contactService = contactService;
  }

  contacts = [];
  filterBy = {searchStr: ''};

  get contactsToShow() {
    var filter = this.filterBy;
    var contactsToShow = this.contacts.filter(curr => {
      for (let key in curr) {
        if (typeof(curr[key]) === 'string' && 
            curr[key].toLowerCase().includes(filter.searchStr.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return contactsToShow;
  }

  setFilter(filterBy) {
    this.filterBy = JSON.parse(JSON.stringify(filterBy));
  }
  
  async removeContact(_id) {
    await this.contactService.remove(_id);
    var idx = this.contacts.findIndex(curr => curr._id === _id);
    if (idx === -1) return new Error('something went wrong');
    this.contacts.splice(idx, 1);
  }

  async loadContacts() {
    this.contacts = await this.contactService.query();
  }

  ngOnInit() {
      this.loadContacts();
  }

}
