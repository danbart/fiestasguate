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
  public comunfiesta;

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
     this._peticionesService.getUnComunidadesFiestas('166').subscribe(
       result => {
         this.comunfiesta = result;
         if(!this.comunfiesta){
           console.log('Error en el Servicio');
         }
       },
       error => {
         var errorMessage = <any>error;
         console.log(errorMessage);
       }
    );
    }
    cambiarComunidad(id){
      this._peticionesService.getUnComunidadesFiestas(id).subscribe(
        result => {
          this.comunfiesta = result;
          if(!this.comunfiesta){
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
