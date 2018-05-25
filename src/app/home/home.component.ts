import {Component} from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'home-tag',
    templateUrl: './home.component.html',
    providers: [PeticionesService]
})
export class HomeComponent{
  public title = 'Fiestas patronales de hoy en Guatemala';
  public fiestas;
  public contador = 0;

    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getHoy().subscribe(
        result => {
          this.fiestas = result;
          if(!this.fiestas){
            console.log('Error en el Servicio');
          }
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
     );
    }
    search(dato){
      this._peticionesService.getSearch(dato).subscribe(
        result => {
          this.fiestas = result;
          if(!this.fiestas){
            console.log('Error en el Servicio');
          }
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
     );
    }
}
