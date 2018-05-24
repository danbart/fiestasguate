import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'fiestames-root',
  templateUrl: './fiestames.component.html',
  providers: [PeticionesService]
})
export class FiestaMesComponent {
  title = 'Fiestas patronales del mes en Guatemala';
  public fiestas;

    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getMes().subscribe(
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

    cambiarMes(fecha){
      this._peticionesService.getUnMes(fecha).subscribe(
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
