import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $:any;


@Component({
  selector: 'app-card-poster-filme',
  templateUrl: './card-poster-filme.component.html',
  styleUrls: ['./card-poster-filme.component.scss']
})
export class CardPosterFilmeComponent implements OnInit {


  patnersArray:any = [
    {
      imgName: "assets/capas/anime/CAPA1.jpg",
      imgCard: "assets/capas/anime/anime-capas/C1.jpg",
      imgTitle: "Akira",
      imgTitleDesc:"1988 ‧ Ficção científica/Anime ‧ 2h 4m"
    },
    {
      imgName: "assets/capas/anime/CAPA2.jpg",
      imgCard: "assets/capas/anime/anime-capas/C2.jpg",
      imgTitle: "Attak On Titan",
      imgTitleDesc:"Série de mangá"
    },
    {
      imgName: "assets/capas/anime/CAPA3.jpg",
      imgCard: "assets/capas/anime/anime-capas/C3.jpg",
      imgTitle: "My Hero Academia",
      imgTitleDesc:"TV Series 2016–12 24m"
    },
    {
      imgName: "assets/capas/anime/CAPA4.jpg",
      imgCard: "assets/capas/anime/anime-capas/C4.jpg",
      imgTitle: "Princesa Mononoke",
      imgTitleDesc:"1997 12 2h 14m"
    },
    {
      imgName: "assets/capas/anime/CAPA5.jpg",
      imgCard: "assets/capas/anime/anime-capas/C5.jpg",
      imgTitle: "Your Name",
      imgTitleDesc:"2016 Livre 1h 46m"
    }
  ]
  isCollapsed: boolean = true;

  customOptions: OwlOptions = {
    margin: 5,    
    autoWidth:true,
    autoHeight: true,
    lazyLoad:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  quant: number = 8;

  constructor() { }

  toggleCollapse(){

    this.isCollapsed = !this.isCollapsed;
  }

  diminuir(){
    $('#animes').css({'margin-botton':'45px'})
  }

  ngOnInit(): void {
    /*
    $('.mostrar').click(function(){
      $('.esconder').css('display', 'block');
    });
    
    $('.mostrar').mousedown(function(){
      $('.esconder').click('display', 'none');
    });
    */
  }

}
