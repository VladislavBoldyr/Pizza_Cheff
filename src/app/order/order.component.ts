import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {Order, OrderService} from "./order.service";
import {first} from "rxjs";

const regularExp = {
  phone: /\d{10}$/,
  name: /^[А-Яа-яA-Za-zёЁ]+$/,
  replaceName: /\.$/g,
  replacePhone: /[^\d]/g,
};

interface OrderForm {
  name: FormControl<string>;
  address: FormControl<string>;
  phone: FormControl<string>;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent  {

  public formGroup: FormGroup<OrderForm>;

  public constructor(private readonly toast: NgToastService, private readonly orderService: OrderService) {
    this.formGroup = new FormGroup<OrderForm>(<OrderForm>{
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(regularExp.phone),
      ]),
    });
  }

  public onKeyupName($event: KeyboardEvent): void {
    const nameFormControl = this.formGroup?.get('name');
    let name = ($event.target as HTMLInputElement).value;
    if (!name) {
      return;
    }
    name = name.replace(regularExp.replaceName, '');
    nameFormControl?.setValue(name);
  }

  public onKeyupPhone($event: KeyboardEvent): void {
    const phoneFormControl = this.formGroup?.get('phone');
    let phone = ($event.target as HTMLInputElement).value;
    if (!phone) {
      return;
    }
    phone = phone.replace(regularExp.replacePhone, '');
    phoneFormControl?.setValue(phone);
  }

  public placeOrder(): void {
    const {name, address, phone} = this.formGroup.value;
    const order: Order = {
      name: name || '',
      address: address || '',
      phone: phone || '',
    }

    this.orderService.placeAnOrder(order).pipe(first()).
    subscribe(()=> this.toast.success({detail:"Success",summary:'Спасибо за заказ',position: 'br',duration:5000}));
  }
}
