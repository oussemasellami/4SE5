import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchname=""
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
   ];
 listfavorie:Residence[]=[]
   showalertinconnu(residence:Residence){
if(residence.address === "inconnu"){
  alert(`L'adresse"${residence.address}"est inconnu`)
}else{
  alert(`L'adresse"${residence.address}":"${residence.name}"existe`)
}

   }
   addtofavorie(residence:Residence){
    const index=this.listfavorie.findIndex(r=>r.id==residence.id)
if (index>-1){
this.listfavorie.splice(index,1)
}else{
  this.listfavorie.push(residence)
  console.log("liste favorie : "+JSON.stringify(this.listfavorie))
}
   }

   isverif(residence:Residence){
    return this.listfavorie.some(r=>r.id===residence.id)

   }

   searchbyname(){
    return this.listResidences.filter(r=>r.name.toLowerCase()
    .includes(this.searchname.toLowerCase()))
   }
}
