import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../service/concert.service';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: ['./update-concert.component.css']
})
export class UpdateConcertComponent implements OnInit {
  
  constructor(private cs:ConcertService, private formBuilder:FormBuilder, private ar:ActivatedRoute, private route:Router) {
    this.num = ar.snapshot.params["num"];
  }

  livreForm?:FormGroup;
  num!:number;

  ngOnInit(): void {
    this.cs.getConcertByNum(this.num).subscribe(data => {
      this.livreForm = this.formBuilder.group(
        {
          num:[data.num],
          nom:[data.nom],
          date:[data.date]
        })
      });
  }

  updateLivre()
  {
    this.cs.updateConcert(this.livreForm?.value).subscribe();
    this.route.navigateByUrl("concert");
  }

}
