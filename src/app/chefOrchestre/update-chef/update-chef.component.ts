import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefOrchestreServiceService } from 'src/app/Service/chef-orchestre-service.service';

@Component({
  selector: 'app-update-chef',
  templateUrl: './update-chef.component.html',
  styleUrls: ['./update-chef.component.css']
})
export class UpdateChefComponent implements OnInit{


constructor(private cs:ChefOrchestreServiceService, private formBuilder:FormBuilder, private route:Router, private ar:ActivatedRoute){

  this.id = ar.snapshot.params["id"];
  //    id ou numChef?
}


chefForm?:FormGroup;
id!:number;


ngOnInit(): void {
  this.cs.getChefOrchestreByIsbn(this.id).subscribe(data => {
    this.chefForm = this.formBuilder.group(
      {
        numChef:[data.numChef],
        nom:[data.nom],
        prenom:[data.prenom],
        dateNaissance:[data.dateNaissance],
        nationalite:[data.nationalite],
        cachet:[data.cachet],
        commentaires:[data.commentaires]

      }
    )
  });

}


updateChef(){
  this.cs.updateChefOrchestre(this.chefForm?.value).subscribe();
  this.route.navigateByUrl("chefs");

}




}
