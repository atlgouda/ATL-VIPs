import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip'
import {VipService } from '../vip.service'
import { VIPS } from '../mock-vips';

var businessArray = VIPS.filter(function (vip) {
  return vip.occupation === "business"
})

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  vips: Vip[] = [];

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = businessArray);
  }
}