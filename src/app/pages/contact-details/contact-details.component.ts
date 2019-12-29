import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { MoveService } from 'src/app/services/move.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService : ContactService,
              private moveService : MoveService,
              private activatedRoute: ActivatedRoute) { }

contact = null;
moves = [];

moveAdded(move) {
  this.moves.unshift(move);
}

async ngOnInit() {
  this.activatedRoute.params.subscribe( async params => {
    console.log(params);
    this.contact = await this.contactService.get(params._id);
    this.moves = await this.moveService.query({contactId: this.contact._id});
  });
}

}
