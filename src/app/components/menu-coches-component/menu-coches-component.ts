import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-menu-coches-component',
  standalone: false,
  styleUrl: './menu-coches-component.css',
  templateUrl: './menu-coches-component.html',
})
export class MenuCochesComponent implements OnInit{
  arraycoches: Coche[] = [];
  
  constructor(
    private _service: ServiceCoches,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arraycoches = await this._service.getCochesAsync();
    this._cdr.detectChanges();
  }
}
