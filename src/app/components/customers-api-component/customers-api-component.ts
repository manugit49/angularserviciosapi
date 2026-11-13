import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { ServiceCustomers } from '../../services/service.customers';

@Component({
  selector: 'app-customers-api-component',
  standalone: false,
  styleUrl: './customers-api-component.css',
  templateUrl: './customers-api-component.html',
})
export class CustomersApiComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private _service: ServiceCustomers,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.customers = await this._service.getCustomersAsync();
    console.log(this.customers);
    this._cdr.detectChanges();
  }

}
