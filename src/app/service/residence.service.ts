import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
UrlResidence="http://localhost:3000/residence"
  constructor( private http:HttpClient) { }

  getnumber(list:any,creteria:any,value:any){
   let n=0
for(let i in list){
if(list[i][creteria]==value){
  n++
}
}
return n
  }

getrsidence():Observable<Residence[]>{
  return this.http.get<Residence[]>("http://localhost:3000/residence")
}
addrsidence(res:Residence):Observable<Residence[]>{
  return this.http.post<Residence[]>("http://localhost:3000/residence",res)
}
deletersidence(id:any):Observable<Residence[]>{
  return this.http.delete<Residence[]>(this.UrlResidence+'/'+id)
}

getbyidrsidence(id:any):Observable<Residence[]>{
  return this.http.get<Residence[]>(this.UrlResidence+'/'+id)
}
updatersidence(id:any,res:Residence):Observable<Residence[]>{
  return this.http.put<Residence[]>(this.UrlResidence+'/'+id,res)
}




}
