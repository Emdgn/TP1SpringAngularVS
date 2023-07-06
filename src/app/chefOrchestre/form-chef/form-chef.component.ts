import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefOrchestreServiceService } from 'src/app/Service/chef-orchestre-service.service';


@Component({
  selector: 'app-form-chef',
  templateUrl: './form-chef.component.html',
  styleUrls: ['./form-chef.component.css']
})
export class FormChefComponent implements OnInit {


  constructor(private cs:ChefOrchestreServiceService, private route:Router, private formBuilder:FormBuilder) {}

  chefForm!:FormGroup;


  ngOnInit(): void {

    this.chefForm = this.formBuilder.group(
      {
        nom:[null],
        prenom:[null],
        dateNaissance:[null],
        nationalite:[null],
        cachet:[null],
        commentaires:[null]

      }
    )
  }

  saveChefOrchestre()
  {
    this.cs.ajoutChefOrchestre(this.chefForm.value).subscribe();
    this.route.navigateByUrl("chefs");
  }










}
