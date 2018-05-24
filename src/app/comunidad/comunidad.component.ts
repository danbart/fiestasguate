import {Component} from '@angular/core';
// import {Empleado} from './empleado';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'comunidad-tag',
    templateUrl: './comunidad.component.html',
    providers: [PeticionesService]
})
export class ComunidadComponent{
  public title = 'Fiestas por Comunidades de Guatemala';
  public fiestas;

    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getComunidades().subscribe(
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
