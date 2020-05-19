import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ATL VIPs';
  constructor(

    private location: Location
  ) { }
  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
