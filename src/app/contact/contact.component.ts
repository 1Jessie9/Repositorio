import { Component } from '@angular/core';
import { CONTACTS } from './constants/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public contacts: any[] = CONTACTS;
}
