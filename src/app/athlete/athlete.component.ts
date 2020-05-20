import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip'
import {VipService } from '../vip.service'
import { VIPS } from '../mock-vips';

var athleteArray = VIPS.filter(function (vip) {
  return vip.occupation.includes("athlete") === true
})

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  vips: Vip[] = [];

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = athleteArray);
  }
}
