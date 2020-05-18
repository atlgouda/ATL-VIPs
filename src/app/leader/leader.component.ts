import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip'
import {VipService } from '../vip.service'
import { VIPS } from '../mock-vips';

var leaderArray = VIPS.filter(function (vip) {
  return vip.occupation === "leader"
})

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {
  vips: Vip[] = [];

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = leaderArray);
  }
}

