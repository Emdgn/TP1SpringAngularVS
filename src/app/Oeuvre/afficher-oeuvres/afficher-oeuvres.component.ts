import { Component, OnInit } from '@angular/core';
import { Oeuvre } from 'src/app/models/oeuvre';
import { OeuvreServiceService } from 'src/app/Service/oeuvre-service.service';

@Component({
  selector: 'app-afficher-oeuvres',
  templateUrl: './afficher-oeuvres.component.html',
  styleUrls: ['./afficher-oeuvres.component.css'],
})
export class AfficherOeuvresComponent implements OnInit {
  oeuvre: Oeuvre = new Oeuvre(0, '', 0);
  oeuvres: Oeuvre[] = [];
  recherche: string = '';
  dureeSelectionnee: number = 0;
  oeuvresFiltrees: Oeuvre[] = [];

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
      this.filtrerOeuvresParNom();
    });
  }

  filtrerOeuvresParNom() {
    this.oeuvresFiltrees = this.oeuvres.filter((oeuvre: Oeuvre) =>
      oeuvre.nom.toLowerCase().includes(this.recherche.toLowerCase())
    );
  }

  filtrerOeuvresParDuree() {
    if (this.dureeSelectionnee > 0) {
      this.oeuvresFiltrees = this.oeuvres.filter((oeuvre: Oeuvre) =>
        oeuvre.duree < this.dureeSelectionnee
      );
    } else {
      this.oeuvresFiltrees = this.oeuvres;
    }
  }
}
