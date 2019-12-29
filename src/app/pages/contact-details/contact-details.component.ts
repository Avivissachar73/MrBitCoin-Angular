import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { MoveService } from 'src/app/services/move.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService : ContactService,
              private moveService : MoveService,
              private userService : UserService,
              private activatedRoute: ActivatedRoute) { }

  contact = null;
  user = null;
  moves = [];

  get img() {
    if (!this.contact) return '';
    return this.contact.img || `https://api.adorable.io/avatars/285/${this.contact.name}.png`;
  }

  async ngOnInit() {
    await this.loadUser();
    this.activatedRoute.params.subscribe( async params => {
      console.log(params);
      this.loadContact(params._id);
    });
  }

  moveAdded(move) {
    this.moves.unshift(move);
  }

  async loadUser() {
    this.user = await this.userService.getLoggedUser();
  }


  async loadContact(_id) {
    this.contact = await this.contactService.get(_id);
    this.moves = await this.moveService.query({contactId: _id});
  }

  async moveRemoved(_id) {
    var idx = this.moves.find(curr => curr._id === _id);
    if (idx === -1) return new Error('something went wrong');
    this.moves.splice(idx, 1);

    await this.loadUser();
  }

}
