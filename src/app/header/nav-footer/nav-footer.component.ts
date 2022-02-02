import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})

export class NavFooterComponent implements OnInit {

  index = -1
  font_size = 14

  constructor() { }



  ngOnInit(): void {
    this.font_size = Number(sessionStorage.getItem("font-size"))
  }



}
