import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monsterreactiveform',
  templateUrl: './monsterreactiveform.component.html',
  styleUrls: ['./monsterreactiveform.component.css']
})
export class MonsterreactiveformComponent {

  registrationForm = this.fb.group({
    username: '',
    password: '',
    email: ''
  })
  
  constructor(private fb: FormBuilder){}

  onSubmit(){
    console.log("Form submitted, data is: ", this.registrationForm.value);
  }

}
