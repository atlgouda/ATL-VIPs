import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip'
import {VipService } from '../vip.service'
import { VIPS } from '../mock-vips';

var actorArray = VIPS.filter(function (vip) {
  return vip.occupation === "actor"
})

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  vips: Vip[] = [];

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      // .subscribe(vips => this.vips.occupation === "athlete");
      .subscribe(vips => this.vips = actorArray);
  }
}