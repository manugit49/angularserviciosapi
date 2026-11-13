import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-hospitales-component',
  standalone: false,
  styleUrl: './hospitales-component.css',
  templateUrl: './hospitales-component.html',
})
export class HospitalesComponent {
  @ViewChild("cajaid") cajaid!: ElementRef;
  arrayhospitales: Hospital[] = [];
  hospital!: Hospital;

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef
  ){}

  async cargarHospitales(): Promise<void>{
    this.arrayhospitales = await this._service.getHospitales();
    this._cdr.detectChanges();
  }

  async buscarHospital(): Promise<void>{
    let idhospital = parseInt(this.cajaid.nativeElement.value);
    console.log(idhospital);
    this.hospital = await this._service.findHospital(idhospital);
    console.log(this.hospital);
    this._cdr.detectChanges();
  }
}
