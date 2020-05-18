import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip'
import {VipService } from '../vip.service'
import { VIPS } from '../mock-vips';

var musicianArray = VIPS.filter(function (vip) {
  return vip.occupation === "musician"
})

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {
  vips: Vip[] = [];

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = musicianArray);
  }
}
