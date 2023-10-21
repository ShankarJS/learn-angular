import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-monsterreactiveform',
  templateUrl: './monsterreactiveform.component.html',
  styleUrls: ['./monsterreactiveform.component.css']
})
export class MonsterreactiveformComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: [1, Validators.required]
  })
  isSubmitted = false;
  roles = [
    {id: 1, title: 'Developer'},
    {id: 2, title: 'qa'}
  ];
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe( (roleId) => {
      console.log('Send API request and update data', roleId);
    });
  }

  onSubmit(){
    console.log("Form submitted, data is: ", this.registerForm.value, this.registerForm.invalid);
    this.isSubmitted = true;
  }

}
