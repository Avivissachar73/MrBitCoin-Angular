import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }

  @Input() contact = null;

  get img() {
    if (!this.contact) return '';
    return this.contact.img || `https://api.adorable.io/avatars/285/${this.contact.name}.png`;
  }

  ngOnInit() {
  }

}
