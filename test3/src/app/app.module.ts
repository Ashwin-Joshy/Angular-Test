import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { CustompipePipe } from './custompipe.pipe';
import { HomeComponent } from './home/home.component';
import { Img1Component } from './home/img1/img1.component';
import { Img2Component } from './home/img2/img2.component';
import { Img3Component } from './home/img3/img3.component';
import { NavComponent } from './home/nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component,
    Box3Component,
    DemoPipeComponent,
    CustompipePipe,
    HomeComponent,
    Img1Component,
    Img2Component,
    Img3Component,
    NavComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
