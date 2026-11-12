import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent {
  @ViewChild("cajaid") cajaid!: ElementRef;
  person!: Persona;
  arraypersonas: Persona[] = []

  constructor(
    private _service: ServicePersonas,
    private _cdr: ChangeDetectorRef
  ){}

  async cargarPersonas(): Promise<void> {
    this.arraypersonas = await this._service.getPersonasAsync();
    this._cdr.detectChanges();
  }

  async buscarPersona(): Promise<void> {
    let idpersona = parseInt(this.cajaid.nativeElement.value);
    console.log(idpersona);
    this.person = await this._service.findPersonaAsync(idpersona);
    this._cdr.detectChanges();
  }
}
