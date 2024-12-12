import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-updatenew',
  templateUrl: './updatenew.component.html',
  styleUrls: ['./updatenew.component.css']
})
export class UpdatenewComponent implements OnInit{

  constructor(private x:ActivatedRoute,private resservice:ResidenceService,private router:Router){

  }
  idp!:any
  residenceform!:FormGroup
  listnew:Residence[]=[]
  ngOnInit(): void {
  this.idp=this.x.snapshot.params['id']
 this.residenceform=new FormGroup({
     // id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9]/)]),
      name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('',Validators.required),
      status:new FormControl('',[Validators.required,Validators.pattern(/^false$/)]),
    })
    this.resservice.getbyidrsidence(this.idp).subscribe((data)=>{
this.listnew=data
this.residenceform.patchValue(this.listnew as any)
    })
  }
 // get id(){return this.residenceform.get('id')}
  get name(){return this.residenceform.get('name')}
  get address(){return this.residenceform.get('address')}
  get status(){return this.residenceform.get('status')}

  update(){
    this.resservice.updatersidence(this.idp,this.residenceform.value).subscribe(()=>
    {
this.router.navigate(['/residences'])
    })

  }
}
