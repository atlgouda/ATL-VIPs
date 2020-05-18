import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip';
import { VipService } from '../vip.service';

@Component({
  selector: 'app-vips',
  templateUrl: './vips.component.html',
  styleUrls: ['./vips.component.css']
})
export class VipsComponent implements OnInit {

  vips: Vip[];

  selectedVip: Vip;

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = vips);
  }
}
