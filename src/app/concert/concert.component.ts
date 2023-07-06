import { Component, OnInit } from '@angular/core';
import { ConcertService } from './service/concert.service';
import { Concert } from './model/concert.model';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private ls:ConcertService, private route:Router) {}

  listeConcert!:Observable<Concert[]>;

  ngOnInit(): void {
    this.listeConcert = this.ls.findAllConcert();
  }

  supprimer(num:number)
  {
    this.ls.supprimerConcert(num).subscribe();
    this.route.navigateByUrl("concert");
  }

  getConcertByIsbn(num:number)
  {
    this.route.navigateByUrl("updateConcert/" + num);
  }

}