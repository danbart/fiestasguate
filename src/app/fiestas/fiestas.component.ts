import {Component} from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
// import {Empleado} from './empleado';

@Component({
    selector: 'fiestas-tag',
    templateUrl: './fiestas.component.html',
    providers: [PeticionesService]
})
export class FiestasComponent{
  public title = 'Fiestas de Guatemala';
  public fiestas;

    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getFiestas().subscribe(
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
