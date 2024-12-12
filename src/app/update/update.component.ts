import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
idurl!:any
  constructor(private act:ActivatedRoute,private resService:ResidenceService){

  }
  residenceform!:FormGroup
  listnew:Residence[]=[]
  ngOnInit(): void {
this.idurl=this.act.snapshot.params['id']
this.residenceform=new FormGroup({
     // id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9]/)]),
      name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('',Validators.required),
      status:new FormControl('',[Validators.required,Validators.pattern(/^false$/)]),
    })
this.resService.getbyidrsidence(this.idurl).subscribe((data)=>{
this.listnew=data
this.residenceform.patchValue(this.listnew as any)
})
  }
 // get id(){return this.residenceform.get('id')}
  get name(){return this.residenceform.get('name')}
  get address(){return this.residenceform.get('address')}
  get status(){return this.residenceform.get('status')}

  UPDATE(){}
}
