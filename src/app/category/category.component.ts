import { Component, OnInit } from '@angular/core';
import { Vip } from '../vips/vip';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VipService }  from '../vips/vips.service';
import vipdata from 'src/assets/vips.json'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  vips: Vip[];

  constructor(
    private vipService: VipService,
    private route: ActivatedRoute,
    private location: Location
    ) { 
      const id: string = route.snapshot.params.id;
      console.log(id);
      var catArray = vipdata.filter(function (vip) {
        return vip.occupation.includes(id) === true
      });
      console.log(catArray);
      this.vipService.getVips()
        .subscribe(vips => this.vips = catArray);

     }

  ngOnInit() {
    // this.getVips();
  }
  // getVips(): void {
  //   this.vipService.getVips()
  //     .subscribe(vips => this.vips = catArray);
  // }
      
}