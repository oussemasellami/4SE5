import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {

  residenceform!:FormGroup
  ngOnInit(): void {
    this.residenceform=new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      image:new FormControl('',Validators.required),
      status:new FormControl('true',Validators.required),
    })
  }

  add(){

    console.log("Form residence : "+JSON.stringify(this.residenceform.value))
  }



}
