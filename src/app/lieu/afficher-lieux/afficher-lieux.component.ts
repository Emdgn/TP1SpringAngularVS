import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/app/models/lieu';
import { LieuService } from 'src/app/services/lieu.service';

@Component({
  selector: 'app-afficher-lieux',
  templateUrl: './afficher-lieux.component.html',
  styleUrls: ['./afficher-lieux.component.css']
})
export class AfficherLieuxComponent implements OnInit {
  lieux: Lieu[] = [];

  constructor(private lieuService: LieuService) { }

  ngOnInit(): void {
    this.getListeLieux();
  }

  getListeLieux() {
    this.lieuService.getListeLieu().subscribe((lieux: Lieu[]) => {
      this.lieux = lieux;
    });
  }

  supprimerLieu(id: number) {
    this.lieuService.deleteLieu(id).subscribe(() => {
      this.getListeLieux();
    });
  }
}
