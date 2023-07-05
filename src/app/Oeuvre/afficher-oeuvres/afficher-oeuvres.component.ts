import { Component, OnInit } from '@angular/core';

import { Oeuvre } from 'src/app/Model/oeuvre';
import { OeuvreServiceService } from 'src/app/Service/oeuvre-service.service';

@Component({
  selector: 'app-afficher-oeuvres',
  templateUrl: './afficher-oeuvres.component.html',
  styleUrls: ['./afficher-oeuvres.component.css'],
})
export class AfficherOeuvresComponent implements OnInit {
  oeuvre: Oeuvre = new Oeuvre(0, '', 0);
  oeuvres: Oeuvre[] = [];

  constructor(private oeuvreService: OeuvreServiceService) {}

  ngOnInit(): void {
    this.findAllOeuvres();
  }

  supprimerOeuvre(id: number) {
    this.oeuvreService.supprimerOeuvre(id).subscribe(() => {
      this.findAllOeuvres();
    });
  }

  findAllOeuvres() {
    this.oeuvreService.findAllOeuvres().subscribe((oeuvres: Oeuvre[]) => {
      this.oeuvres = oeuvres;
    });
  }
}
