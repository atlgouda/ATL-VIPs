import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip';
import { VIPS } from '../mock-vips';

@Component({
  selector: 'app-vips',
  templateUrl: './vips.component.html',
  styleUrls: ['./vips.component.css']
})
export class VipsComponent implements OnInit {
  // vip: Vip = {
  //   id: 1,
  //   name: 'Hank Aaron',
  //   occupation: 'athlete', 
  //   reason: 'Home Run King',
  //   born: 1934
  // }
  vips = VIPS;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(vip: Vip): void {
    this.selectedVip = vip;
  }
}
