import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Oeuvre } from 'src/app/models/oeuvre';
import { OeuvreServiceService } from 'src/app/Service/oeuvre-service.service';

@Component({
  selector: 'app-modifier-oeuvre',
  templateUrl: './modifier-oeuvre.component.html',
  styleUrls: ['./modifier-oeuvre.component.css']
})
export class ModifierOeuvreComponent implements OnInit {
  oeuvreForm!: FormGroup;
  numOeuvre: number;
  oeuvre!: Oeuvre;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private oeuvreService: OeuvreServiceService, private route:Router) {
    this.numOeuvre = ar.snapshot.params["numOeuvre"];
  }

  ngOnInit(): void {
    this.oeuvreService.obtenirOeuvre(this.numOeuvre).subscribe(oeuvre => {
      this.oeuvre = oeuvre;
      this.oeuvreForm = this.formBuilder.group({
        numOeuvre: [oeuvre.numOeuvre],
        nom: [oeuvre.nom],
        duree: [oeuvre.duree]
      });
    })
  }

  modifierOeuvre(oeuvre: Oeuvre) {
    this.oeuvreService.modifierOeuvre(oeuvre).subscribe(() => {
      this.route.navigateByUrl("afficherOeuvres");
    });
  }
}
