import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit{
  @ViewChild("cajaid") cajaid! : ElementRef
  car!: Coche;
  arraycoches!: Coche[];

  constructor(
    private _service: ServiceCoches,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arraycoches = await this._service.getCochesAsync();
    this._cdr.detectChanges();
  }

  async buscarCoche(): Promise<void> {
    let idCoche = parseInt(this.cajaid.nativeElement.value);
    //Buscamos el coche por el idCoche
    this.car = await this._service.findCocheAsync(idCoche);
    this._cdr.detectChanges();
  }
}
