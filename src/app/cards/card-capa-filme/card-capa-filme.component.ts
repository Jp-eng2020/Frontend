import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardServiceService } from 'src/app/cards/card-capa-filme/card-service.service';
import { Card } from './card';

declare var $:any;

@Component({
  selector: 'app-card-capa-filme',
  templateUrl: './card-capa-filme.component.html',
  styleUrls: ['./card-capa-filme.component.scss']
})
export class CardCapaFilmeComponent implements OnInit {
 
  carde: Card[] = [];

  constructor(private service: CardServiceService) { }

  ngOnInit() {

    this.service.list().subscribe(dados =>{ this.carde = dados; console.log(dados)});
  }


  //ULR DAS IMAGENS 
  patnersArray:any = [
    {
      imgName: "assets/movie_covers/L1.jpg",
      imgTitle: "Bayb Driver"
    },
    {
      imgName: "assets/movie_covers/L2.jpg",
      imgTitle: "American Horror Story"
    },
    {
      imgName: "assets/movie_covers/L3.jpg",
      imgTitle: "Ava"
    },
    {
      imgName: "assets/movie_covers/L4.jpg",
      imgTitle: "Duna"
    },
    {
      imgName: "assets/movie_covers/L5.jpg",
      imgTitle: "It a coisa"
    },
    {
      imgName: "assets/movie_covers/L6.jpg",
      imgTitle: "Ratched"
    },
    {
      imgName: "assets/movie_covers/L7.jpg",
      imgTitle: "Stranger Things"
    },
    {
      imgName: "assets/movie_covers/L8.jpg",
      imgTitle: "O poderoso chefão"
    },
    {
      imgName: "assets/movie_covers/L9.jpg",
      imgTitle: "Senhor dos aneis"
    },
    {
      imgName: "assets/movie_covers/L10.jpg",
      imgTitle: "Matrix Revolution"
    }
  ]

  customOptions: OwlOptions = {
    margin: 6,    
    autoWidth:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoHeight: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

    

      /*
    $("#painel").hide();

    $("#flip").click(function() {
      top: '250px'
      $("#painel").slideToggle("slow");
    })
    */

}
