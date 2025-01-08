import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  inputName: string = '';
  inputAge: number|null = null ;
  inputEmail: string = '';
  inputPassword: any ;


}
