import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loged-profile',
  templateUrl: './loged-profile.component.html',
  styleUrls: ['./loged-profile.component.css']
})

export class LogedProfileComponent implements OnInit {

  cars: any[];

  ngOnInit() {
    this.cars = [{ brand: 'Mercedes', year: '2020', color: 'Red' },
    { brand: 'Mercedes', year: '2020', color: 'Red' },
    { brand: 'Ranaut', year: '2020', color: 'Red' }
    ]
  }
}

