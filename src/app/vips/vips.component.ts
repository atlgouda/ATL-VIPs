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
  add(name: string, type: string, detail: string, reason: string, yt:string): void {
    name = name.trim();
    type = type.trim();
    detail = detail.trim();
    reason = reason.trim();
    yt = yt.trim();
    if (!name) { return; }
    this.vipService.addVip({ name, type, detail, reason, yt } as Vip)
      .subscribe(vip => {
        this.vips.push(vip);
      });

  }
}
