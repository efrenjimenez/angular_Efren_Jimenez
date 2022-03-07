import { Component, OnInit } from '@angular/core';
import { AutorService } from '../servicios/autor.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: any
  

  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.autor=this.autorService.getAutor();
  }

}
