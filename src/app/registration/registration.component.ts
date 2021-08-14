import { Registration } from './../model/reg';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration: Registration = new Registration();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  submitData(){
    this._httpClient.post('http://localhost:3000/grades/eight', this.registration).subscribe(() => {
      alert('Registration was successful');
      this._router.navigate(['/learn'])
    })
  }
}
