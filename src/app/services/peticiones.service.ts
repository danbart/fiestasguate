import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';


// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
  public url: string;
  constructor(public _http:Http){
    this.url ="http://localhost/FiestasAPI/";
  }
   getPrueba(){
     return "Hola Mundo desde el Servicio";
   }
   //esto devuelve objetos usables en un servisio rest para java script
   //en la funcion de calvac con map capturamos la respuesta y la convertimos a json
   getFiestas(){
     return this._http.get(this.url+'fiestas')
                      .pipe(map(res => res.json()));
   }
   getComunidades(){
     return this._http.get(this.url+'comunidades')
                      .pipe(map(res => res.json()));
   }
   getComunidadesFiestas(){
     return this._http.get(this.url+'comunidadfiesta')
                      .pipe(map(res => res.json()));
   }
   getUnComunidadesFiestas(id){
     return this._http.get(this.url+'comunidadfiesta/'+id)
                      .pipe(map(res => res.json()));
   }
   getDepartamento(){
     return this._http.get(this.url+'departamentos')
                      .pipe(map(res => res.json()));
   }
   getDepartamentoFiesta(){
     return this._http.get(this.url+'departamentofiestas')
                      .pipe(map(res => res.json()));
   }
   getUnDepartamentoFiesta(id){
     return this._http.get(this.url+'departamentofiestas/'+id)
                      .pipe(map(res => res.json()));
   }
   getHoy(){
     return this._http.get(this.url+'fiestashoy')
                      .pipe(map(res => res.json()));
   }
   getMes(){
     return this._http.get(this.url+'fiestasmes')
                      .pipe(map(res => res.json()));
   }
   getUnMes(date){
     return this._http.get(this.url+'fiestasmes/'+date)
                      .pipe(map(res => res.json()));
   }
   getSearch(data){
     return this._http.get(this.url+'search/'+data)
                      .pipe(map(res => res.json()));
   }
}
