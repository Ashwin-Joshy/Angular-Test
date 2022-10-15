import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Copm1Component } from './copm1/copm1.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// const appRoute: Routes = [
//   { path: '', component: Comp2Component },
//   { path: 'comp1', component: Comp1Component },
//   { path: 'comp2', component: Comp2Component },
// ];
@NgModule({
  declarations: [AppComponent, Copm1Component, Comp1Component, Comp2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
