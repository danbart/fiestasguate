import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'departamentos-root',
  templateUrl: './departamento.component.html',
  // styleUrls: ['./app.component.css'],
  providers: [PeticionesService]
})
export class DepartamentosComponent {
  title = 'Fiestas patronales por departamentos de Guatemala';
  public fiestas;
  public depafiesta;

    constructor(
      private _peticionesService: PeticionesService
    ){}

    ngOnInit(){
      this._peticionesService.getDepartamento().subscribe(
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
     this._peticionesService.getUnDepartamentoFiesta(1).subscribe(
       result => {
         this.depafiesta = result;
         if(!this.depafiesta){
           console.log('Error en el Servicio');
         }
       },
       error => {
         var errorMessage = <any>error;
         console.log(errorMessage);
       }
    );
    }
    cambiarDepartamento(id){
      this._peticionesService.getUnDepartamentoFiesta(id).subscribe(
        result => {
          this.depafiesta = result;
          if(!this.depafiesta){
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
