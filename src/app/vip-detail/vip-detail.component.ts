import { Component, OnInit, Input } from '@angular/core';
import { Vip } from '../vips/vip';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VipService }  from '../vips/vips.service';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.css']
})
export class VipDetailComponent implements OnInit {
  vip: Vip;

  constructor(
    private route: ActivatedRoute,
    private vipService: VipService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVip();
  }
  getVip() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.vipService.getVip(id)
      .subscribe(vip => this.vip = vip);
  }


}
