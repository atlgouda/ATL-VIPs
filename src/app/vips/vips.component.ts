import { Component, OnInit } from '@angular/core';
import { Vip } from './vip';
import { VipService } from './vips.service';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-vips',
  templateUrl: './vips.component.html',
  styleUrls: ['./vips.component.css']
})
export class VipsComponent implements OnInit {

  vips: Vip[];
  editVip: Vip //the vip currently being edited

  selectedVip: Vip;

  constructor(private vipService: VipService) { }

  ngOnInit() {
    this.getVips();
  }

  getVips(): void {
    this.vipService.getVips()
      .subscribe(vips => this.vips = vips);
  }
  add(name: string, type: string, occupation: string, detail: string, reason: string, yt:string): void {
    name = name.trim();
    type = type.trim();
    occupation = occupation.trim();
    detail = detail.trim();
    reason = reason.trim();
    yt = yt.trim();
    if (!name) { return; }
    const newVip: Vip = { name, type, occupation, detail, reason, yt } as Vip;
    this.vipService
      .addVip(newVip as Vip)
      .subscribe(vip => {
        this.vips.push(vip);
      });

  }

  delete(vip: Vip): void {
    this.vips = this.vips.filter(v => v !== vip);
    this.vipService
      .deleteVip(vip.id)
      .subscribe(
        () => console.log(`Vip with id = ${vip.id} deleted`),
        (err) => console.log(err)
      );
  }

  edit(vip: Vip) {
    this.editVip = vip;
  }

  update() {
    if (this.editVip) {
      this.vipService
        .updateVip(this.editVip)
        .subscribe(vip => {
        // replace the vip in the vips list with update from server
        const ix = vip ? this.vips.findIndex(v => v.id === vip.id) : -1;
        if (ix > -1) {
          this.vips[ix] = vip;
        }
      });
      this.editVip = undefined;
    }
  }
}
