import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../service/concert.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-concert',
  templateUrl: './formulaire-concert.component.html',
  styleUrls: ['./formulaire-concert.component.css']
})
export class FormulaireConcertComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private cs:ConcertService, private route:Router){}

  concertForm!:FormGroup;

  ngOnInit(): void {
    this.concertForm = this.formBuilder.group(
      {
        nom:[null],
        adateuteur:[null],
      }
    )
  }

  saveConcert()
  {
    this.cs.ajoutConcert(this.concertForm.value).subscribe();
    this.route.navigateByUrl("concert");
  }


}
