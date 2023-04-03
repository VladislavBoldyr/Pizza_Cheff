import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgToastModule } from "ng-angular-popup";
import { NgImageFullscreenViewModule } from "ng-image-fullscreen-view";

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgToastModule,
    NgImageFullscreenViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
