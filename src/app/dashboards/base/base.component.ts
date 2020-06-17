import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Item } from 'src/app/shared/interfaces/item.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  public listSolicitudes: Item;

  constructor() { }

  ngOnInit() { }

  addSolicitud(item: Item) {
    /* console.log(item); */
    this.listSolicitudes = item;
  }


}
