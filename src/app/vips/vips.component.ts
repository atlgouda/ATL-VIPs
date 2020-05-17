import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip';
import { VipService } from '../vip.service';

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
  vips: Vip[];

  selectedVip: Vip;

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }
  onSelect(vip: Vip): void {
    this.selectedVip = vip;
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = vips);
  }
}
