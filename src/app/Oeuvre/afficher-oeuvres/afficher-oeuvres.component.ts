import { Component, OnInit } from '@angular/core';
import { Oeuvre } from 'src/app/models/oeuvre';
import { OeuvreServiceService } from 'src/app/services/oeuvre-service.service';

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
      this.filtrerOeuvres();
    });
  }

  filtrerOeuvres() {
    this.oeuvresFiltrees = this.oeuvres.filter((oeuvre: Oeuvre) =>
      oeuvre.nom.toLowerCase().includes(this.recherche.toLowerCase()) &&
      (this.dureeSelectionnee === 0 || oeuvre.duree < this.dureeSelectionnee)
    );
  }
}
