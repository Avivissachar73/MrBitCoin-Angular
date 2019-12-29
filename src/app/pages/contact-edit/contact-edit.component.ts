import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService : ContactService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  contact = null

  async ngOnInit() {
    this.activatedRoute.params.subscribe( async params => {
      console.log(params);
      this.contact = await this.contactService.get(params._id);
    })
  }

  async saveContact(ev) {
    ev.preventDefault();
    await this.contactService.save(this.contact);
    this.router.navigate(['/contact']);
  }

}
