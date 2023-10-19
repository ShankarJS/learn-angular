import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-monsterreactiveform',
  templateUrl: './monsterreactiveform.component.html',
  styleUrls: ['./monsterreactiveform.component.css']
})
export class MonsterreactiveformComponent {

  registrationForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  })
  
  constructor(private fb: FormBuilder){}

  onSubmit(){
    console.log("Form submitted, data is: ", this.registrationForm.value, this.registrationForm.invalid);
  }

}
