import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pic: string = 'assets/images/learners_teacher.jpg';
  pic1: string = 'assets/images/female_teacher.jpg';
  pic2: string = 'assets/images/advance_teaching.jpg';
  pic3: string = 'assets/images/our_kids.jpg';
  pic4: string = 'assets/images/senwane.jpg';
  pic5: string = 'assets/images/grades.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
