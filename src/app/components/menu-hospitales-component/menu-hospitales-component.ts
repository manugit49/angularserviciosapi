import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-menu-hospitales-component',
  standalone: false,
  styleUrl: './menu-hospitales-component.css',
  templateUrl: './menu-hospitales-component.html',
})
export class MenuHospitalesComponent implements OnInit{
  arrayhospitales: Hospital[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceHospitales
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayhospitales = await this._service.getHospitales();
    this._cdr.detectChanges();
  }

}
