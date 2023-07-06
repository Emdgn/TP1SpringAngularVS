import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Oeuvre } from 'src/app/Model/oeuvre';
import { OeuvreServiceService } from 'src/app/Service/oeuvre-service.service';


@Component({
  selector: 'app-ajouter-oeuvre',
  templateUrl: './ajouter-oeuvre.component.html',
  styleUrls: ['./ajouter-oeuvre.component.css']
})
export class AjouterOeuvreComponent implements OnInit {
  oeuvreForm: FormGroup;
  oeuvre: Oeuvre = new Oeuvre(0, '', 0);

  constructor(private oeuvreService: OeuvreServiceService, private formBuilder: FormBuilder) {
    this.oeuvreForm = this.formBuilder.group({
      numOeuvre: [''],
      nom: [''],
      duree: ['']
    });
  }

  ngOnInit(): void {
  }

  ajouterOeuvre(oeuvre: Oeuvre) {
    this.oeuvreService.ajoutOeuvre(oeuvre).subscribe(() => {
      this.resetForm();
    });
  }

  resetForm() {
    this.oeuvreForm.reset();
    this.oeuvre = new Oeuvre(0, '', 0);
  }
}

