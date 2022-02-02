import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  font_size = 40

  form: FormGroup  = new FormGroup({});
  constructor(private fb: FormBuilder, private service: LoginService) { }

  ngOnInit(): void {
    this.font_size = Number(sessionStorage.getItem("font-size"))
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
    }
    );
  }

  onSubmit(){
      this.service.login(this.form.value);
  }
 
  

}
