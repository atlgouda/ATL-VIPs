import { Component, OnInit, Input } from '@angular/core';
import { Vip } from '../vip';

@Component({
  selector: 'app-vip-detail',
  templateUrl: './vip-detail.component.html',
  styleUrls: ['./vip-detail.component.css']
})
export class VipDetailComponent implements OnInit {
  @Input() vip: Vip;

  constructor() { }

  ngOnInit() {
  }

}
