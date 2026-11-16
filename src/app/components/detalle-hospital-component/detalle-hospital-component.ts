import { ChangeDetectorRef, Component } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';
import { ActivatedRoute, Params } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-detalle-hospital-component',
  standalone: false,
  styleUrl: './detalle-hospital-component.css',
  templateUrl: './detalle-hospital-component.html',
})
export class DetalleHospitalComponent {
  hospital!: Hospital;
  mensaje!: string;
  constructor(
    private _service: ServiceHospitales,
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let idhospital = params['idhospital'];
      this.mensaje = "Soy el hospital " + idhospital;
      this.hospital = await this._service.findHospital(idhospital);
      this._cdr.detectChanges();
    })
  }
}
