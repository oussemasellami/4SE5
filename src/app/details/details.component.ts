import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
idd!:any
listdetails:Residence[]=[]
  constructor(private r:ActivatedRoute,private resService:ResidenceService){}
  ngOnInit(): void {
    this.idd=this.r.snapshot.params['id']
this.resService.getbyidrsidence(this.idd).subscribe((data)=>{
this.listdetails=data
console.log("data"+JSON.stringify(this.listdetails))
})
    
  }

}
