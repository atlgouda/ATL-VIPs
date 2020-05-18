import { Component, OnInit, Input } from '@angular/core';
import { Vip } from '../vip';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VipService }  from '../vip.service';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.css']
})
export class VipDetailComponent implements OnInit {
  @Input() vip: Vip;

  constructor(
    private route: ActivatedRoute,
    private vipService: VipService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVipYt();
  }
  getVipYt() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vipService.getVip(id)
      .subscribe(vip => this.vip = vip);
      return(this.vip.yt)
  }


}
