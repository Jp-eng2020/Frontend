import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/login/login/login.service';
declare var $:any;

@Component({
  selector: 'app-nav-filme',
  templateUrl: './nav-filme.component.html',
  styleUrls: ['./nav-filme.component.scss']
})
export class NavFilmeComponent implements OnInit {
 
  userAutenticatedAdmin: boolean = false;
  userAutenticated: boolean = false;
  private contrastActive = true;
  contador = 0
  fontSizeComponent = 14


  constructor(private loginService: LoginService) { }
  opaci(){
    $('#opac').css({'opacity':'0.5'})
  }
  ngOnInit(): void {
    this.loginService.userAdminEmitter.subscribe(
      show => { this.userAutenticatedAdmin = show }
    );

    this.loginService.userEmitter.subscribe(
      show => { this.userAutenticated = show; }
    );
  }

  contrast() {
    var body = window.document.getElementsByTagName("body");
    var navbar = window.document.getElementById("header");
    var accessibility = window.document.getElementById("accessibility");

    if (this.contrastActive) {
      body[0].style.backgroundColor = "white"
      navbar!.style.backgroundColor = "white"
      accessibility!.style.backgroundColor = "white"
    } else {
      body[0].style.backgroundColor = "#3d3d3d"
      navbar!.style.backgroundColor = "#3d3d3d"
      accessibility!.style.backgroundColor = "#00447c"
    }
    this.contrastActive = !this.contrastActive
  }
  defaultFont() {

    if (this.contador > 0) {
      for (let index = this.contador; index > 0; index--) {
        this.decreaseFont()
      }
    } else {
      for (let index = this.contador; index < 0; index++) {
        this.increaseFont()
      }
    }
  }

  increaseFont() {
    var spans = document.getElementsByTagName("span")
    var labels = document.getElementsByTagName("label")
    if (this.contador < 5) {
      for (let index = 0; index < spans.length; index++) {
        var style = window.getComputedStyle(spans[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        spans[index].style.fontSize = (fontSize + 1) + 'px';
      }

      for (let index = 0; index < labels.length; index++) {
        var style = window.getComputedStyle(labels[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        labels[index].style.fontSize = (fontSize + 1) + 'px';
      }
      this.contador++
      sessionStorage.setItem("font-size", (14 + this.contador).toString())
    }
  }
  decreaseFont() {
    var spans = document.getElementsByTagName("span")
    var labels = document.getElementsByTagName("label")
    if (this.contador > -5) {

      for (let index = 0; index < spans.length; index++) {
        var style = window.getComputedStyle(spans[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        spans[index].style.fontSize = (fontSize - 1) + 'px';
      }

      for (let index = 0; index < labels.length; index++) {
        var style = window.getComputedStyle(labels[index], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        labels[index].style.fontSize = (fontSize - 1) + 'px';
      }
      this.contador--
      sessionStorage.setItem("font-size", (14 + this.contador).toString())
    }
  }

}
