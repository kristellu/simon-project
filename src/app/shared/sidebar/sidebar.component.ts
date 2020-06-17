import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  showLocket = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  changeStyle(element: any){
    if (element === this.showLocket) {
      this.showLocket = '0';
    } else {
      this.showLocket = element;
    }
    /*if ($event != '0'){
      this.showLocket = "out";
      console.log($event + 'out');
    }else{
      this.showLocket='0';
    }*/
  }
  
  pinTostart(modulo:any){
    alert(modulo+' anclado al menú lateral');
  }
  unpinTostart(modulo:any){
    alert(modulo+' des anclado al menú lateral');
  }
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
