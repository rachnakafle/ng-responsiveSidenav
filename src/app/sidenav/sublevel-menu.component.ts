import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">

        <a  *ngIf="item.items && item.items.length > 0">
        <i class="sublevel-link-icon fa fa-circle">
        <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>

        <i *ngIf="item.items && collapsed" class="menu-collapse-icon" [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"]></i>
      </i></a>

      <a  class="sublevel-nav-link" *ngIf="!item.items || (item.items && item.items.length === 0)" [routerLink]="[item.routeLink]" routerLinkActive="active-sublevel" [routerLinkActiveOptions]="{exact:true}"]>
      <i class="sublevel-link-icon fa fa-circle"> <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span></i>
      </a>
      <div *ngIf="item.items && item.items.length > 0">
        <app-sublevel-menu [collapsed]="collapsed" [multiple]="multiple" [expanded]="item.expanded"></app-sublevel-menu>
      </div>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}